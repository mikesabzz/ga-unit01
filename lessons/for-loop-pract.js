// #1: Write a for loop that prints all numbers between 0-50, inclusive.
    for (let i = 0; i <= 50; i++) {
    console.log(i)
    }
// #2: Write a for loop that prints all even numbers between 0-100, exclusive.
for (let i =0; i<= 100; i++){
    if(i % 2 === 0) {
        console.log(i)
    }
   
}
// #3: Write a for loop that prints all numbers evenly divisible by 7 between 0-100, inclusive.
for(let i=0; i<=100; i++) {
    if(i%7 === 0) {
        console.log(i)
    }
}
// #4: Write a for loop that prints all items in the array below.

let q4items = [10, 1, 23, 1, 20, 3, 19, 9, 16, 21];
    let x = q4items.toString();
    for(let x = 0; x < q4items.length; x++){
    }
    console.log(x)

// #5: Write a for loop that prints all items in the array below that have a ```typeof``` string.

let q5items = ['banana', 37, ['bear'], 'thirty', { isCool: true }, 'pikachu'];
    
    for(let x = 0; x <q5items.length; x++){
        if (typeof(q5items[x] === 'string')) {
            console.log(q5items[x])
        }
    }
     
    
// #6: Write a for loop that prints all numbers between 0-50 in reverse, inclusive.
for(let i = 0; i <= 50; i++){
    
}
// #7: Write a for loop that prints all items in the array below that are even numbers.

let q7items = [2, 4, 5, 7, 8, 10, 13];
for (let i = 0; i <= q7items.length; i++){
    if (i%2 ===0){
        console.log('q7item', i)
    }
}

// #8: Write a while loop that prints all numbers between 0-50, inclusive.
let text = ""
let i = 0
while (i <= 50){
    text += i + ', ';
    i++
}
console.log('q8 ', text)

// #9: Write a while loop that prints all even numbers between 0-100, exclusive.
let num = ""
let j = 0
while(j <= 100){
    if (j%2===0){
        num += j +', ';  
    }
    j++
}
console.log('q9 ', num)

// #10: Write a while loop that prints all numbers evenly divisible by 7 between 0-100, inclusive.
let seven = "";
let counter = 0;
while(counter <= 100){
    if(counter%7==0){
        seven += counter + ', ';
    }
    counter++;
}
console.log('Q10 ', seven);
// #11: Write a while loop that prints all items in the array below.
let k = 0
let vals = ''
let q11items = [90, 31, 54, 700, 1, 3];
while(k<=q11items.length -1){
    vals += q11items[k] + ', ';
    k++;
}
console.log('q11', vals)

// #12: Write a while loop that prints all items in the array below that have a ```typeof``` string.

let q12items = [{ lovesJavascript: true }, 'i write code now', 'so i can do', 35, 'things on my', ['sweet graphic calculator'], 'computer'];
let index = 0;
let allOut = '';
while(index <= q12items.length){
    if(typeof q12items[index] == String){
        allOut += q12items[index] + ', ';
    }
    index++;
}
console.log('Q12: ', allOut);
// #13: Write a while loop that prints all numbers between 0-50 in reverse, inclusive.
let newIndex = 0;
let unfold = '';
let backwardsArray = [];
let newArray = [];
while(newIndex <= 50){
    unfold += newIndex + ', ';
    newIndex++;
}
backwardsArray.push(unfold);
for (let i = backwardsArray.length; i <= 0; i--){
    newArray.push(backwardsArray[i]);
}
console.log('Q13: ', newArray)
// #14: Write a while loop that prints all items in the array below that are even numbers.

let q14items = [2, 4, 5, 7, 8, 10, 13];

let int = 0;
let hereItIs = '';
while(int <= q14items.length){
    if(q14items[int] % 2 == 0){
        hereItIs += q14items[int] + ', ';
    }
    int++
}
console.log('Q14: ', hereItIs);