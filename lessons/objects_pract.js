const basketballBall = {
    size : 'professional',
    shape : 'sphere',
    material : 'leather',
    brands: ['Spalding', 'Wilson', 'Nike'],
    brandsLength: function() {
        return this.brands.length
    }
};

    let constructorObject = new Object();
    let someObject = {}

console.log(basketballBall.brandsLength())



const Car = function(model, color) {
    this.color = color;
    this.model = model;
    this.fuelMeter = 100;
    this.isDriveable = function() {
        if(this.fuelMeter > 0) {
            return true;
        }
    }
}

const coolJetta = new Car('jetta', 'black')
const dopeTesla = new Car('model3', 'blue')

console.log(coolJetta)
console.log(dopeTesla)

console.log(dopeTesla.isDriveable())

let Object = {
    a: 'prop a',
    b: 'prop b'
};

let objectKeys = Object.keys(object)
console.log(objectKeys[1])