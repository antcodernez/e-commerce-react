import "boxicons";

const OrdersCard = props => {
    // eslint-disable-next-line react/prop-types
    const {totalPrice, totalProducts} = props;
   
    return (
        <div className="flex justify-between items-center mb-3 border border-emerald-800">
            <div className="flex items-center gap-2">
                <p>
                    <span>01.02.23</span>
                    <span>{totalProducts}</span>
                    <span>{totalPrice}</span>
                </p>
            </div>
        </div>
        
    )
}

export { OrdersCard }
