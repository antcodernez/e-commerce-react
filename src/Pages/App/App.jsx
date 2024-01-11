import './App.css';
import {Home} from "../Home";
import {SingIn} from "../SingIn";
import {MyAccount} from "../MyAccount";
import {MyOrder} from "../MyOrder";
import {MyOrders} from "../MyOrders";
import {NotFound} from "../NotFound";

function App() {

  return (
    <>
      <Home></Home>
      <p className='bg-red-100'>Hola mundo xd</p>
      <SingIn></SingIn>
      <NotFound></NotFound>
      <MyOrders></MyOrders>
      <MyOrder></MyOrder>
      <MyAccount></MyAccount>
    </>
  )
}

export default App
