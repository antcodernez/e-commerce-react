import { createContext, useEffect, useState } from "react";

//Creamos un contexto
const ShoppingCartContext = createContext();


// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
    //Quantity products  on shopingcart
    const [count, setCount] = useState(0);

    // productDetail * open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
    // checkout Side Menu * open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //takes a product and render it on the component Product detail 
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
      });
    // Shopping cart * add products to card
    const [cartProducts, setCartProducts] = useState([]);
    
    // Shopping cart * order
    const [order, setOrder] = useState([]);
    
    // Get products bt title
    const [searchByTitle, setSearchByTitle] = useState(null);
    
    // Get products 
    const [products, setProducts] = useState(null); //useState es un hook que se utiliza para agregar el estado a los componentes de función en React. Permite que un componente de función tenga un estado local, lo que significa que puede almacenar y modificar datos a lo largo del ciclo de vida del componente.

    const [filtredProducts, setFiltredProducts] = useState(null);

    useEffect(() => {
        try {
          fetch("https://api.escuelajs.co/api/v1/products")
          .then(res => res.json())
          .then(data => setProducts(data.slice(0, 34)))
        } catch (error) {
          console.error(error);
        }
        
      }, []); //se utiliza para realizar efectos secundarios en componentes de función. Estos efectos secundarios pueden incluir cosas como la manipulación del DOM, solicitudes de red, suscripciones a eventos y más. useEffect se ejecuta después de cada renderizado del componente y se utiliza para manejar lógica que no debería estar directamente en el flujo de renderizado principal del componente.
    
    
      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
      }
      
   
    //value of category to search products
    const [searchByCategory, setSearchByCategory] = useState(null);


    /**
     * 
     * @param {Array} items array with objects
     * @param {String} searchByCategory category to filter 
     * @returns {Array} products per category
     */
    const filteredProductsByCategory = (items, searchByCategory) => {
      return items?.filter(item => item?.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    useEffect(() => {
      if (searchByTitle && !searchByCategory) {
        setFiltredProducts(filterBy("BY_TITLE", products, searchByTitle));
      }
      if (!searchByTitle && searchByCategory) {
        setFiltredProducts(filterBy("BY_CATEGORY", products, null, searchByCategory));
      }
      if (!searchByCategory && !searchByTitle) {
        setFiltredProducts(filterBy(null, products, null, null));
      }
      if (searchByTitle && searchByCategory) {
        setFiltredProducts(filterBy("BY_TITLE_AND_CATEGORY", products, searchByTitle, searchByCategory));
      }
    }, [products, searchByTitle, searchByCategory])
    

    const filterBy = (searchType, products, searchByTitle, searchByCategory) => {
      switch (searchType) {
        case "BY_TITLE":
          return filteredItemsByTitle(products, searchByTitle);
        case "BY_CATEGORY":
          return filteredProductsByCategory(products, searchByCategory);
        case "BY_TITLE_AND_CATEGORY":
          return filteredProductsByCategory(filteredItemsByTitle(products, searchByTitle), searchByCategory);
        default:
          return products;
      }
    }
    return (    
    //Creamos un provedor que va a encapsular todos mis componentes en APP para darles informacion
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu, 
        setOrder,
        order, 
        products,
        setProducts,
        searchByTitle, 
        setSearchByTitle,
        filtredProducts,
        setSearchByCategory,
        searchByCategory
    }}>
        {children}
    </ShoppingCartContext.Provider>
    )
} 

export {
    ShoppingCartProvider,
    ShoppingCartContext
}
