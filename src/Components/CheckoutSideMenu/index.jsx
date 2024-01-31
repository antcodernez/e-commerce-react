import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import "boxicons";
import "./styles.css";


const CheckoutSideMenu = () => {
  const [animation, setAnimation] = useState(null);

  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts} = useContext(ShoppingCartContext);


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
  console.log(cartProducts);
  // let randomNumber =  Math.floor(Math.random() * 4)

  return (
    <aside className={`${isCheckoutSideMenuOpen ? "flex":"hidden" } checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}>
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

        <div className="px-6  overflow-y-scroll">
          {
            cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.images}     
              />
            ))
          }
        </div>
    </aside>
  )
}

export { CheckoutSideMenu }
