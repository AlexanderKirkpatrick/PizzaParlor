function Pizza (crust, sauce, meats, toppings, size) {
  this.crust = crust;
  this.sauce = sauce;
  this.meats = meats;
  this.toppings = toppings;
  this.size = size;
  this.cost = 0;
}

Pizza.prototype.size = function (pizzaSize) {
  let size = pizzaSize;
  const sizeSmall = "Small";
  const sizeMedium = "Medium";
  const sizeLarge = "Large"
  for (let s = 0; s <= sizeSmall.length -1; s++) {
    for (let m = 0; m <= sizeMedium.length -1; m++) {
      for (let l = 0; l <= sizeLarge.length -1; l++) {
        if (sizeSmall[s].includes(size)) {
          this.cost += 5;
          break;
        } else if (sizeMedium[m].includes(size)) {
          this.cost += 10;
          break;
        } else if (sizeLarge[l].includes(size)) {
          this.cost += 15;
          break;
        }
      }
    }
  }
}

Pizza

