import { useRoutes, BrowserRouter } from 'react-router-dom';

import {Home} from "../Home";
import {SingIn} from "../SingIn";
import {MyAccount} from "../MyAccount";
import {MyOrder} from "../MyOrder";
import {MyOrders} from "../MyOrders";
import {NotFound} from "../NotFound";

import './App.css';

const AppRoutes = () => {
  // se utiliza el hook useRoutes para definir las rutas de la aplicación.
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> }, //Estoy indicando que sea cualquier ruta que no este declarada
  ]);

  return routes;
}


const App = () => {
  return (
    // el componente BrowserRouter para envolver las rutas de la aplicación. Esto proporciona la funcionalidad de enrutamiento para la aplicación.
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

    //Se incluye el componente AppRoutes dentro de BrowserRouter, indicando que las rutas definidas en AppRoutes se utilizarán para gestionar la navegación de la aplicación.
  )
}

export default App
