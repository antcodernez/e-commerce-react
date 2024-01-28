import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "boxicons";
import "./styles.css";


function ProductDetail() {
  
  const {isProductDetailOpen, closeProductDetail} = useContext(ShoppingCartContext);

  return (
    <aside className={`${isProductDetailOpen ? "flex":"hidden" } product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}>
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-xl p-6">Detail</h2>
          <div className="cursor-pointer mx-1">
            <box-icon 
              name="x" 
              color="#7e22ce" 
              size="md" 
              animation={isProductDetailOpen ?  "tada" : null } 
              onClick={() => {
                if(isProductDetailOpen)
                  {
                    closeProductDetail();
                  }
              }}
            />
          </div>      
        </div>
    </aside>
  )
}

export { ProductDetail }
