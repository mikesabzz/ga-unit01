




const Monkey = function(name, species) {
    this.name = name
    this.species = species
    this.foodPreference = "banana"
    this.foodsEaten = []
    this.isHappy = false
    this.eatSomething = function(food) {
      if (food === this.foodPreference) {
        this.foodsEaten.push(food)
        this.isHappy = true
      }
      console.log('It ate a ' + food)
    }
    this.introduce = function() {
      if (this.isHappy) {
        console.log('uh uh ah ah')
      }
      else {
        console.log('silence')
      }
    }
  }
  
  const chimp = new Monkey('Alfred', 'chimp')
  const gorilla = new Monkey('Kong', 'gorilla')
  const baboon = new Monkey('John', 'baboon')
  
  console.log(chimp.eatSomething('banana'))
  console.log(chimp.foodsEaten)
  




