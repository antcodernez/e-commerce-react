import "boxicons";

const OrdersCard = props => {
    // eslint-disable-next-line react/prop-types
    const {totalPrice, totalProducts, dateOrder} = props;
   
    return (
        <div className="flex justify-between items-center mb-3 border border-emerald-800">
            <div className="flex items-center gap-2">
                <p>
                    <span>febrero amor</span>
                    <span>{totalProducts}</span>
                    <span>{totalPrice}</span>
                </p>
            </div>
        </div>
        
    )
}

export { OrdersCard }
