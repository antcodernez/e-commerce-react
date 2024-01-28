import { createContext, useState } from "react";

//Creamos un contexto
const ShoppingCartContext = createContext();


// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);


    
    return (    
    //Creamos un provedor que va a encapsular todos mis componentes en APP para darles informacion
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen
    }}>
        {children}
    </ShoppingCartContext.Provider>
    )
} 

export {
    ShoppingCartProvider,
    ShoppingCartContext
}
