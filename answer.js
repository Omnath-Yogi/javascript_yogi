const DiscountType = {
    standard_D :"standard",
    seasonal_D : "seasonal",
    weight_D : "weight"
};

function getDiscountedPrice(cartWeight , totalPrice , DiscountType){
   if(cartWeight<=10){
    return discounted_price = totalPrice -(( totalPrice * 6)/100)

   }else if(cartWeight>10){
    return discounted_price = totalPrice -(( totalPrice * 18)/100)
   }

}

console.log(getDiscountedPrice(12 ,100, DiscountType.weight_D));