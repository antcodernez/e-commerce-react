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

    //Product detail show product
    const [productToShow, setProductToShow] = useState({

    });
    
    return (    
    //Creamos un provedor que va a encapsular todos mis componentes en APP para darles informacion
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow
    }}>
        {children}
    </ShoppingCartContext.Provider>
    )
} 

export {
    ShoppingCartProvider,
    ShoppingCartContext
}
