import "boxicons";

const OrderCard = props => {
    // eslint-disable-next-line react/prop-types
    const {title, imageUrl, price, handleDelete, id} = props;
return (
    <div className="flex justify-between items-center mb-3c">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img src={imageUrl} alt={title} 
                    className="w-full h-full rounded-lg object-cover"
                />
            </figure>
            <p className="text-sm font-light">{title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-lg font-medium">{price}</p>
            <box-icon 
              name="x" 
              color="#7e22ce" 
              size="md"
              onClick={() => handleDelete(id)}
              className="cursor-pointer"
            />
        </div>
    </div>
  )
}

export { OrderCard }
