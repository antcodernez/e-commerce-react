import { useContext } from 'react';
import {Layout} from '../../Components/Layout';
import { OrdersCard } from "../../Components/OrdersCard";
import {ShoppingCartContext} from "../../Context";
import { Link } from 'react-router-dom';
import "boxicons";

function MyOrders() {
  const {order} = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative'>
      <Link to="/" className='absolute left-0'>
        <box-icon 
            type='solid' 
            name='chevron-left'
            color="#7e22ce" 
            size="md"
            className="cursor-pointer"
          />
        </Link>
        <h1>My orders</h1>
      </div>
      {
        order.map((oneOrder, index) => (
          <Link to={`/my-orders/${index}`} key={index}>
              <OrdersCard 
                totalPrice={oneOrder.totalPrice}
                totalProducts={oneOrder.totalProducts}
                date = {oneOrder.date}
              />
          </Link>
        ))
      }

    </Layout>
  )
}

export {
  MyOrders
}