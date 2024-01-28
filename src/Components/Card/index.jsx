import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "boxicons";

// eslint-disable-next-line react/prop-types
function Card(data) {
  const {category: {name}, images, price, title} = data;
  const context = useContext(ShoppingCartContext); //Me va a leer mi estado global

  const showProduct = (productDetail) => { 
    context.openProductDetail();
    context.setProductToShow(productDetail);
  }

  return (
    <div className='bg-white cursor-pointer w-60 h-70 rounded-lg'
    onClick={() => showProduct(data)}
    >
      <figure className='relative mb-2 w-full h-3/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{name}</span>
        <img src={images[0]} alt={title} className='w-full h-full object-cover rounded-lg'/>
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-10g h-10 rounded-full m-2 p-2'
          onClick={(e) => {
            e.stopPropagation(); //Evita que el evento se propague hacia el div principal
            context.setCount(context.count + 1);
          }}
        >
          <box-icon type="solid" name="cart-add" color="#7e22ce"></box-icon>
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-md font-light'>{title}</span>
        <span className='text-lg font-medium'>${price}</span>
      </p>
    </div>
  )
}

export {Card}
