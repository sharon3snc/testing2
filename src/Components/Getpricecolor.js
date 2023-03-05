    // price > 25 should return red 
    // price > 15 and price <= 25 should return orange 
    // In any other case return green 

const PriceColor = ({price}) => {
    const getPriceColor = price => { 
        if (price>25){
            return 'red';
        } else if (price>15 && price<=25) {
            return 'orange';
        } else {
            return 'green';
        }
    }
    return <span style={{color: getPriceColor(price)}}> {price} </span>
}

export default PriceColor;
