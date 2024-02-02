import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";
import "boxicons";
import "./styles.css";
import { Link } from "react-router-dom";


const CheckoutSideMenu = () => {
  const [animation, setAnimation] = useState(null);

  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, count, setCount, setOrder, order} = useContext(ShoppingCartContext);


  const handleIconClick = () => {
    if (isCheckoutSideMenuOpen) {
      // Cambiar la animación al hacer clic
      setAnimation("tada");
      
      setTimeout(() => {
        closeCheckoutSideMenu();
        setAnimation(null);
      }, 750);
    }
  }
  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id);
    setCartProducts(filteredProducts);
    setCount(count - 1);
  }
  // let randomNumber =  Math.floor(Math.random() * 4)

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    console.log(order);
    setOrder([...order, orderToAdd]);
    console.log(order);
    setCartProducts([]);
    setCount(0);
    closeCheckoutSideMenu()
  }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? "flex":"hidden" }  checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg overflow-y-scroll`}>
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-xl p-6">My Orders</h2>
          <div className="cursor-pointer mx-1">
            <box-icon 
              name="x" 
              color="#7e22ce" 
              size="md" 
              animation={animation} 
              onClick={handleIconClick}
            />
          </div>      
        </div>

        <div className="px-6 flex gap-4 flex-col flex-1">
          {
            cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.images}
                handleDelete={handleDelete}     
              />
            ))
          }
        </div>
        
        <div className="px-6 mb-6">
          <p className="flex place-content-between my-5 items-center">
            <span className="font-semibold text-2xl">Total: </span>
            <span className="text-green-700 font-bold text-2xl">{`$${totalPrice(cartProducts)}`}</span>
          </p>
          <Link to="/my-orders/last">
            <button 
              onClick={() => handleCheckout()}
              className="w-full bg-black py-3 text-white rounded-lg cursor-pointer"  
            >
              Checkout
            </button>
          </Link>
          
        </div>
    </aside>
  )
}

export { CheckoutSideMenu }
