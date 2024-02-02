import { useContext } from 'react';
import {Layout} from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';
import { Link } from 'react-router-dom';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-6'>
      <Link to="/my-orders" className='absolute left-0'>
        <box-icon 
            type='solid' 
            name='chevron-left'
            color="#7e22ce" 
            size="md"
            className="cursor-pointer"
          />
        </Link>
        <h1>My order estoy loco lalala</h1>
      </div>
      <div className="flex flex-col w-80 gap-4 mt-10">
          {
            context.order?.slice(-1)[0].products.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.images}
              />
            ))
          }
        </div>
    </Layout>
  )
}

export {
  MyOrder
}