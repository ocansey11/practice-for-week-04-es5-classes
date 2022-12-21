// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log("Bark");
//   }

//   static diet() {
//     return "carnivore";
//   }
// }



// Refactored Dog class to Es5 Class

function Dog(name, age){
  this.name = name
  this.age = age
 }

 Dog.prototype.bark = function(){
  console.log("Bark");
 }

 Dog.diet = function(){
  return "carnivore";
 }
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

module.exports = Dog;
