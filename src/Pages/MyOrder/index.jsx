// import { useContext } from 'react';
// import {Layout} from '../../Components/Layout';
// import { ShoppingCartContext } from '../../Context';
// import { OrderCard } from '../../Components/OrderCard';
// import { Link } from 'react-router-dom';
// import "boxicons";
//import { totalPrice } from '../../utils';

// function MyOrder() {
//   const context = useContext(ShoppingCartContext);
//   const currentPath = window.location.pathname;
  
  
//   const index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
//   console.log(index);

//   return (
//     <Layout>
//       <div className='flex items-center justify-center w-80 relative mb-6'>
//       <Link to="/my-orders" className='absolute left-0'>
//         <box-icon 
//             type='solid' 
//             name='chevron-left'
//             color="#7e22ce" 
//             size="md"
//             className="cursor-pointer"
//           />
//         </Link>
//         <h1>My order estoy loco lalala</h1>
//       </div>
//       <div className="flex flex-col w-80 gap-4 mt-10">
//           {
//             context.order?.slice(-1)[0].products.map((product) => (
//               <OrderCard
//                 key={product.id}
//                 id={product.id}
//                 title={product.title}
//                 price={product.price}
//                 imageUrl={product.images}
//               />
//             ))
//           }
//       </div>
//     </Layout>


//   )
// }

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../Components/Layout";
import { OrderCard } from "../../Components/OrderCard";
import { ShoppingCartContext } from "../../Context";
import "boxicons";
const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;

  const [index, setIndex] = useState(
    currentPath.substring(currentPath.lastIndexOf("/") + 1)
  );
  useEffect(() => {
    if (index === "last") setIndex(context.order?.length - 1);
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative mb-6">
        <Link to="/my-orders" className="absolute left-0">
        <box-icon 
            type='solid' 
            name='chevron-left'
            color="#7e22ce" 
            size="md"
            className="cursor-pointer"
          />
        </Link>
        <h2>My Order</h2>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export {
  MyOrder
}
