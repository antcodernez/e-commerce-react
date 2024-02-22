import { useContext } from 'react';
import {useNavigate} from "react-router-dom";
import {Layout} from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';


function MyAccount() {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const {userApp, setUserApp, setSessionState, order} = shoppingCartContext;
  
  const navigate = useNavigate();

  function closeSession ()
    { 
      setSessionState(false);
      navigate("/");
      setUserApp({});
    }
  return (
    <Layout>
      My account
      <div className="h-52 w-52 bg-teal-700">
        <p>Welcome{`${userApp.email}`}</p>

        <button onClick={() => closeSession()}>Log out</button>
      </div>

    </Layout>  
  )
}


export {
    MyAccount
}