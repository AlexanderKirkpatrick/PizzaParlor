# Pizza Parlor Project

#### By **Alexander Kirkpatrick**

#### An application that allows a user to order a pizza and get a price.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JQuery
* Javascript
* Markdown

## Description

When the user orders their pizza, a response with the price is returned.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of directory
* Open PizzaParlor/index.html in your browser
* Order your pizza, and get the price!

## TDD Descriptions

* Describe: Pizza 

* Test One: It should return a pizza object with properties for size, crust, sauce, meats, and toppings.
* Code: const myPizza = new Pizza("size", "crust", "sauce", "meats", "toppings")
* Expected Output: Pizza {size: "", crust: "", sauce: "", meats: "", toppings: ""}

* Describe: pizzaSize 

* Test One: It should return the size and cost of pizza
* Code: pizzaSize ("medium")
* Expected Output: 10

* Describe: pizzaCrust 

* Test One: It should return the crust type and price
* Code: pizzaCrust ("thin")
* Expected Output: 2

* Describe: pizzaSauce 

* Test One: It should return the sauce type and cost
* Code: pizzaSauce ("alfredo")
* Expected Output: 2

* Describe: pizzaMeat 

* Test One: It should return the meat type and cost
* Code: pizzaSauce ("chicken")
* Expected Output: 2

* Describe: pizzaToppings 

* Test One: It should return the selected topping and cost
* Code: pizzaSauce ("jalapenos")
* Expected Output: 1

## Known Bugs

No known bugs as of yet. Please contact knibz@protonmail.com for any suggestions or fixes.

## GitHub Pages Link

[AlexanderKirkpatrick.github.io/PizzaParlor](https://alexanderkirkpatrick.github.io/PizzaParlor/)

## License

THE PORTFOLIO IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _2022_ _Alexander Kirkpatrick_

