import '../styles/styles.css';
import Critter from './modules/Critter';

if (module.hot) {
  module.hot.accept();
}

/* lesson example code below this line */
// Inherit everything from the parent Critter class
class Adult extends Critter {
  payTaxes() {
    console.log(this.name + ' now owes $0 in taxes!');
  }
}

let orson = new Critter('Orson', 'some kinda apple');
orson.greet();

let manny = new Adult('Manny', 'seaweed');
manny.greet();
manny.payTaxes();
