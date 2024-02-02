import "boxicons";

const OrderCard = props => {
    // eslint-disable-next-line react/prop-types
    const {title, imageUrl, price, handleDelete, id} = props;
    let xICon;
    if(handleDelete)
        {
            xICon = <div className="flex items-center gap-2">
            <box-icon 
              name="x" 
              color="#7e22ce" 
              size="md"
              onClick={() => handleDelete(id)}
              className="cursor-pointer"
            />
            
            </div>;
        }
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img src={imageUrl} alt={title} 
                        className="w-full h-full rounded-lg object-cover"
                    />
                </figure>
                <p className="text-md font-light">{title}</p>
                <p className="text-2xl font-bold">{price}</p>
                {xICon}  
            </div>
        </div>
        
    )
}

export { OrderCard }
