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
  const sizeLarge = "Large";
  if (sizeSmall.includes(pizzaSize)) {
    this.cost += 5;  
      } else if (sizeMedium.includes(pizzaSize)) {
        this.cost += 10;
      } else if (sizeLarge.includes(pizzaSize)) {
        this.cost += 15;
    }
  }

  Pizza.prototype.pizzaCrust = function (crust) {
    let pizzaCrust = crust;
    const crustThin = "Thin";
    const crustThick = "Thick";
    const crustStuffed = "Stuffed";
    if (crustThin.includes(pizzaCrust)) {
      this.cost += 2;
    } else if (crustThick.includes(pizzaCrust)) {
      this.cost += 3;
    } else if (crustStuffed.includes(pizzaCrust)) {
      this.cost += 5;
    }
  }

  Pizza.prototype.pizzaSauce = function (sauce) {
    let pizzaSauce = sauce;
    const sauceRed = "Tomato";
    const sauceWhite = "Alfredo";
    const sauceGreen = "Pesto";
    if (sauceRed.includes(pizzaSauce)) {
      this.cost += 1;
    } else if (sauceWhite.includes(pizzaSauce)) {
      this.cost += 2;
    } else if (sauceGreen.includes(pizzaSauce)) {
      this.cost += 3;
    }
  }

  Pizza.prototype.pizzaMeat = function(meats) {
    let pizzaMeat = meats;
    const meatPepperoni = "Pepperoni";
    const meatChicken = "Chicken";
    const meatSausage = "Sausage";
    if (meatPepperoni.includes(pizzaMeat)) {
      this.cost += 1;
    } else if (meatChicken.includes(pizzaMeat)) {
      this.cost += 2;
    } else if (meatSausage.includes(pizzaMeat)) {
      this.cost += 3;
    }
  }

  Pizza.prototype.pizzaToppings = function(toppings) {
    let pizzaToppings = toppings;
    const toppingJalapenos = "Jalapenos";
    const toppingPineapples = "Pineapples";
    const toppingOlives = "Olives";
    if (toppingJalapenos.includes(pizzaToppings)) {
      this.cost += 1;
    } else if (toppingPineapples.includes(pizzaToppings)) {
      this.cost += 2;
    } else if (toppingOlives.includes(pizzaToppings)) {
      this.cost += 3;
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
    newPizza.pizzaCrust(crustOptions);
    newPizza.pizzaSauce(sauceOptions);
    newPizza.pizzaMeat(meatOptions);
    newPizza.pizzaToppings(toppingsOptions);

    const totalPrice = newPizza.cost;
    $("#price").show();
    $(".total").text(totalPrice);
    $("#pizza-picker").each(function(){
      this.reset();
    });
  });
});

