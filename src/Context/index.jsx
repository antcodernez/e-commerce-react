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
    const [searchByTitle, setSearchByTitle] = useState("");

    // Get products 
    const [products, setProducts] = useState(null); //useState es un hook que se utiliza para agregar el estado a los componentes de función en React. Permite que un componente de función tenga un estado local, lo que significa que puede almacenar y modificar datos a lo largo del ciclo de vida del componente.

    const [filtredProducts, setFiltredProducts] = useState([]);

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

    useEffect(() => {
      if(searchByTitle)
        {
          setFiltredProducts(filteredItemsByTitle(products, searchByTitle))
        }
    }, [products, searchByTitle])

    console.log(filtredProducts);

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
        filtredProducts
    }}>
        {children}
    </ShoppingCartContext.Provider>
    )
} 

export {
    ShoppingCartProvider,
    ShoppingCartContext
}
