import { useContext } from 'react';
import {Layout} from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      My orders estoy loco lalala
      <div className="flex flex-col w-80 gap-4">
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
  MyOrders
}