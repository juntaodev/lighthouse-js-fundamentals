const calculateChange = function(total, cash) {

  let change = {};
  let margin = cash - total;

  while (margin > 0) {
    if (margin >= 2000) {
      change.twentyDollar = change.twentyDollar + 1 || 1
      margin -= 2000;
    } else if (margin >= 1000) {
      change.tenDollar = change.tenDollar + 1 || 1
      margin -= 1000;
    } else if ( margin >= 500) {
      change.fiveDollar = change.fiveDollar + 1 || 1
      margin -= 500;
    } else if (margin >= 200) {
      change.twoDollar = change.twoDollar + 1 || 1
      margin -= 200;
    } else if (margin >= 100) {
      change.oneDollar = change.oneDollar + 1 || 1
      margin -= 100;
    } else if (margin >= 25) {
      change.quarter = change.quarter + 1 || 1
      margin -= 25;
    } else if (margin >= 10) {
      change.dime = change.dime + 1 || 1
      margin -= 10;
    } else if (margin >= 5) {
      change.nickel = change.nickel + 1 || 1
      margin -= 5;
    } else if (margin >= 1) {
      change.penny = change.penny + 1 || 1
      margin -= 1;
    }
  }

  return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));