const birthYears = [1978, 1987, 1995, 2000];

const ages = [];

for (let i = 0; i < birthYears.length; i++){
    let age = 2019 - birthYears[i];
    ages.push(age);
}
console.log(ages)


//Using map()
const ages = birthYears.map(function(element) {
    return 2019 - element
})
console.log(ages)


