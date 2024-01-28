import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import "boxicons";
import "./styles.css";


function ProductDetail() {
  const [animation, setAnimation] = useState(null);

  const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext);

  const { images, price, title, description} = productToShow;

  const handleIconClick = () => {
    if (isProductDetailOpen) {
      // Cambiar la animación al hacer clic
      setAnimation("tada");
      
      setTimeout(() => {
        closeProductDetail();
        setAnimation(null);
      }, 750);
    }
  }

  // let randomNumber =  Math.floor(Math.random() * 4)

  return (
    <aside className={`${isProductDetailOpen ? "flex":"hidden" } product-detail flex-col fixed bg-white right-0 border border-black rounded-lg overflow-y-auto`}>
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-xl p-6">Detail</h2>
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
        <figure className="px-6">
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full rounded-lg"
            />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-green-500 text-2xl mb-2">${price}</span>
          <span className="font-medium text-md">{title}</span>
          <span className="font-light text-sm">{description}</span>
        </p>
    </aside>
  )
}

export { ProductDetail }
