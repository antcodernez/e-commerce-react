/* eslint-disable no-unused-vars */
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
      <div className="flex justify-between items-center mb-3 border border-emerald-800 rounded-lg mt-6">
            <div className="flex items-center gap-2">
                <p className="text-2xl flex justify-between items-center p-4 font-normal">
                    <span>
                        <span className="text-xl flex items-center">
                            <box-icon type='solid' name='calendar' size="sm"></box-icon>
                        </span> 
                        <span className="text-xl flex items-center">
                            <box-icon name='cart' size="sm"></box-icon>
                            Articles:
                        </span>
                    </span>
                    <span className="font-bold ml-8">$</span>
                </p>
            </div>
        </div>
    </Layout>  




  )
}


export {
    MyAccount
}