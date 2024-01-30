import { createContext, useState } from "react";

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
        closeCheckoutSideMenu
    }}>
        {children}
    </ShoppingCartContext.Provider>
    )
} 

export {
    ShoppingCartProvider,
    ShoppingCartContext
}
