import { createContext } from "react";

//Creamos un contexto
const ShoppingCartContext = createContext();


// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
    return (
    //Creamos un provedor que va a encapsular todos mis componentes en APP para darles informacion
    <ShoppingCartContext.Provider>
        {children}
    </ShoppingCartContext.Provider>
    )
} 

export {
    ShoppingCartProvider
}
