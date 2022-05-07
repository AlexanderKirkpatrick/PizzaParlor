function Pizza (size, crust, sauce, meats, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.meats = meats;
  this.toppings = toppings;
  this.cost = 0;
}

Pizza.prototype.pizzaSize = function (size) {
  let pizzaSize = size;
  const sizeSmall = "Small";
  const sizeMedium = "Medium";
  const sizeLarge = "Large"
  if (sizeSmall.includes(pizzaSize)) {
    this.cost += 5;  
      } else if (sizeMedium.includes(pizzaSize)) {
        this.cost += 10;
      } else if (sizeLarge.includes(pizzaSize)) {
        this.cost += 15;
    }
  }
    
  






$(document).ready(function() {
  $("form#pizza-picker").submit(function(event) {
    event.preventDefault();

    const sizeOptions = $("select#sizeOptions").val();
    const crustOptions = $("select#crustOptions").val();
    const sauceOptions = $("select#sauceOptions").val();
    const meatOptions = $("select#meatOptions").val(); 
    const toppingsOptions = $("select#toppingsOptions").val();

    let newPizza = new Pizza(sizeOptions, crustOptions, sauceOptions, meatOptions, toppingsOptions);
    newPizza.pizzaSize(sizeOptions);
    //newPizza.pizzaCrust(crustOptions);
    //newPizza.pizzaSauce(sauceOptions);
    //newPizza.pizzaMeat(meatOptions);
    //newPizza.pizzaToppings(toppingsOptions);

    const totalPrice = newPizza.cost;
    $("#price").show();
    $(".total").text(totalPrice);
    $("#pizza-picker").each(function(){
      this.reset();
    });
  });
});

