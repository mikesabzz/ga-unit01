// IF...ELSE STATEMENT:

const yourMoney = 50;
const catPrice = 100;

if (yourMoney === catPrice) {
    console.log('You have just enought to buy a cat!');
} else if (yourMoney > catPrice) {
    console.log('You can buy a cat and will have dollars left over');
}
else {
    console.log('You cannot buy a cat. You need more dollars');
}

//TERNARY:

let age = 12

// let allowed

// if (age > 18) {
//   allowed = 'yes'
// } else {
//   allowed = 'no'
// }
let allowed = (age > 18) ? 'this is true' : 'this is false'

console.log(allowed)


//switch statement

let food = 'orange';

switch(food) {
  case 'pear':
    console.log('I like pears');
    break;
  case 'apple':
    console.log('I like apples');
    break;
  case 'orange':
    //   console.log('mmm orange');
    //   break
  case 'clem':
    console.log('mmm... citrus');
    break;
  default:
    console.log('idk what that is');
}

let n = 10;

switch(n) {
    case 1:
        console.log('1 is actually not prime!');
        break;
    case 2 :
        console.log('2 is the smallest prime!');
        break;
    case 3 :
    case 5 :
    case 7 :
        console.log(n + ' is prime!');
        break;
    case 4 :
    case 6 :
    case 8 :
    case 9 :
        console.log(n, 'is not prime :(');
        break;
      default:
          console.log('idk if ' + n + ' is prime. google it, ask yourself, ask your friend.')                                  
}


//WHILE LOOPS:

/*
let n = 0
while (n < 50) {
  console.log(`${n} is ${n % 2 ? 'odd' : 'even'}`)
  n++
}

let n = 0
while (n < 50) {
  console.log(`${n} is ${n % 2 ? 'odd' : 'even'}`)
  if (n === 42) {
    break
  }
  n++
}
*/

//FOR LOOPS:
const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let i = 0;
while(i < 10) {
  console.log([i]);

  i++;
}