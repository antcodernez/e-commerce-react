import "boxicons";
import "./styles.css";

function ProductDetail() {
  return (
    <aside className="product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-xl p-6">Detail</h2>
          <box-icon name='x' animation='tada' color='#ff00ce' ></box-icon>        </div>
    </aside>
  )
}

export { ProductDetail }
