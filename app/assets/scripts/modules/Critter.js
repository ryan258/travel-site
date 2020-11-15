class Critter {
  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
  }

  greet() {
    console.log(
      'Hello, my name is ' +
        this.name +
        ' and I love to eat ' +
        this.favoriteFood
    );
  }
}

//// The Old School Way
// function Critter(name, favFood) {
//   this.name = name;
//   this.favoriteFood = favFood;

//   this.signatureMove = function () {
//     console.log(this.name + ' loves to eat ' + this.favoriteFood);
//   };
// }

export default Critter;
