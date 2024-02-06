import "boxicons";

const OrdersCard = props => {
    // eslint-disable-next-line react/prop-types
    const {totalPrice, totalProducts, date} = props;

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
   
    return (
        <div className="flex justify-between items-center mb-3 border border-emerald-800 rounded-lg mt-6">
            <div className="flex items-center gap-2">
                <p className="text-2xl flex justify-between items-center p-4 font-normal">
                    <span>
                        <span className="text-xl flex items-center">
                            <box-icon type='solid' name='calendar' size="sm"></box-icon>
                            {formattedDate}
                        </span> 
                        <span className="text-xl flex items-center">
                            <box-icon name='cart' size="sm"></box-icon>
                            Articles: {totalProducts}
                        </span>
                    </span>
                    <span className="font-bold ml-8">${totalPrice}</span>
                </p>
            </div>
        </div>
        
    )
}

export { OrdersCard }
