function Animal(species) {
    this.species = species;
    this.isAlive = true;
}

Animal.prototype.die = function() {
    if (this.isAlive) {
        this.isAlive = false;
        return `The ${this.species} has died.`
    }
    return 'CANT DIE TWICE DUMMY.'
}

function Dog(name, breed, age) {
    // Animal.call(this, 'dog') //call the animal function
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.bark = function() {
        return `${this.name} says WOOF WOOF!!`
    }
}

const a = new Animal('penguin')
a.isAlive //true    
a.die()
// "The penguin has died"
a.die() //'CANT DIE TWICE DUMMY.'

const person = {name: "Thomas", age: 55}

const x = Object.create(person)

x //{}
x.age //55

Dog.prototype //{howl: f, constructor: f}

Dog.prototype = Object.create(Animal.prototype) //inherit prototype from Animal

Dog.prototype //Animal {}

Dog.prototype.howl = function() {
    return `${this.name} says AWOOOOooo`
}

const ringo = new Dog('ringo', 'corgi', 8)

ringo //Dog {name: "ringo", breed:"corgi", age: 8, bark: f} //contains animal prototype under __proto__
ringo.howl()//"ringo says AWOOOOooo"
ringo.die()//'CANT DIE TWICE DUMMY.' //there is no this.isAlive because we never call the animal constructor fn
//we have to call super first...

//add line 15
ringo //Dog {species: 'dog', isAlive: true, name: "ringo", breed: "corgi", age: 8, bark: f(), __proto__: Animal}
//now we have inheritance!!!
ringo.die()//"The dog has died."
ringo.die() // 'can't die twice'
function createAccount(pin, amount) {

}

module.exports = { createAccount };
