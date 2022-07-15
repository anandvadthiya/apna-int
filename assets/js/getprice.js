// array of items , plan, property type
function priceOf(array, _from_url, property_type){
    // alert("test")
    let prices = {"bp": 3000, "ms": 1000, "rcm": 1000, "sk": 2500, "wlk": 3500, "ri": 3000, "rv": 20000, "pd": 2299, "pdm": 3000, "hw": 899, "lam": 1800, "oss": 2000, "ds": 13999, "dd": 15999, "fs": 1500, "pc": 899, "en": 2500, "ltc": 1699} 
    let base_price = 0
    let amount = 0

    array.forEach(i => {
        base_price += prices[i]
    });
    console.log(base_price);
    
    if(property_type == "2BHK"){
        amount = base_price}
    else if(property_type == "3BHK"){
        if(_from_url == 1) {amount = base_price * 1.3;}
        else if(_from_url == 2) {amount = base_price * 1.2;}
        else if(_from_url == 3) {amount = base_price * 1.15;}
    }
    else if(property_type == "Duplex"){
        if(_from_url == 1)
            amount = base_price * 1.3 * 1.2
        else if(_from_url == 2)
            amount = base_price * 1.2 * 1.15
        else if(_from_url == 3)
            amount = base_price * 1.15 * 1.12
        }
    else if(property_type == "Villa"){
        if(_from_url == 1)
            amount = base_price * 1.3 * 1.2 * 1.2
        else if(_from_url == 2)
            amount = base_price * 1.2 * 1.15 * 1.15
        else if(_from_url == 3)
            amount = base_price * 1.15 * 1.12 * 1.12}

    // return amount
    let x = amount
    x = Math.trunc(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '')
      lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    
    return res

}