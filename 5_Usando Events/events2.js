// Como herdar o EventEmitter

const {inherits} = require('util');
const {EventEmitter} = require('events');

//Construtor da função de classe
function Character(name){
    this.name = name
}
inherits(Character, EventEmitter)

const chapolin = new Character('Marcio')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado! `))

console.log("E agora quem poderá me defender?")
chapolin.emit('help')

