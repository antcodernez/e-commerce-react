import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';

import {Home} from "../Home";
import {SingIn} from "../SingIn";
import {MyAccount} from "../MyAccount";
import {MyOrder} from "../MyOrder";
import {MyOrders} from "../MyOrders";
import {NotFound} from "../NotFound";
import {Navbar} from "../../Components/Navbar";
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';
import { ShoppingCartContext, ShoppingCartProvider } from "../../Context/index";
import './App.css';



const AppRoutes = ({sessionState}) => {
  // se utiliza el hook useRoutes para definir las rutas de la aplicación.
  const routes = useRoutes([
    { path: "/", element: sessionState ? <Home /> :  <Navigate to="/sing-in" /> },
    { path: "/clothes", element: sessionState ? <Home /> :  <Navigate to="/sing-in" />},
    { path: "/electronics", element: sessionState ? <Home /> :  <Navigate to="/sing-in" />},
    { path: "/furnitures", element: sessionState ? <Home /> :  <Navigate to="/sing-in" />},
    { path: "/toys", element: sessionState ? <Home /> :  <Navigate to="/sing-in" />},
    { path: "/gallos", element: sessionState ? <Home /> :  <Navigate to="/sing-in" />},
    { path: "/my-order", element: sessionState ? <MyOrder /> : <Navigate to="/sing-in" />},
    { path: "/my-orders", element: sessionState ? <MyOrders /> : <Navigate to="sing-in" />},
    { path: "/my-orders/last", element: sessionState ? <MyOrder /> : <Navigate to="sing-in" />},
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-account", element: sessionState ? <MyAccount /> : <Navigate to="sing-in"/>},
    { path: "/:url", element: <SingIn /> },
    { path: "/*", element: <NotFound /> }, //Estoy indicando que sea cualquier ruta que no este declarada
  ]);

  return routes;
}


const App = () => {
  

  console.log("ShoppingCartContext:", useContext(ShoppingCartContext));

  return (
    // el componente BrowserRouter para envolver las rutas de la aplicación. Esto proporciona la funcionalidad de enrutamiento para la aplicación.
    <ShoppingCartProvider>
      <BrowserRouter>
        <CheckoutSideMenu />
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
    //Se incluye el componente AppRoutes dentro de BrowserRouter, indicando que las rutas definidas en AppRoutes se utilizarán para gestionar la navegación de la aplicación.
  )
}

export default App
