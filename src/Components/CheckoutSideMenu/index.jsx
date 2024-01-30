import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import "boxicons";
import "./styles.css";


const CheckoutSideMenu = () => {
  const [animation, setAnimation] = useState(null);

  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu} = useContext(ShoppingCartContext);


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

  // let randomNumber =  Math.floor(Math.random() * 4)

  return (
    <aside className={`${isCheckoutSideMenuOpen ? "flex":"hidden" } checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg overflow-y-auto`}>
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
    </aside>
  )
}

export { CheckoutSideMenu }
