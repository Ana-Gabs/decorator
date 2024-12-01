const SandwichBase = require('./sandwich/SandwichBase'); 
const Lechuga = require('./sandwich/Lechuga');
const Tomate = require('./sandwich/Tomate'); 
const Queso = require('./sandwich/Queso'); 
const ServicioSandwich = require('./sandwich/ServicioSandwich'); 

// crea un sandwich base
const sandwichBase = new SandwichBase();
ServicioSandwich.mostrarSandwich(sandwichBase, "Sandwich base");

// agrega mas ingredientes
let sandwichConLechuga = new Lechuga(sandwichBase);
ServicioSandwich.mostrarSandwich(sandwichConLechuga, "Sandwich con lechuga");

let sandwichConTomate = new Tomate(sandwichConLechuga);
ServicioSandwich.mostrarSandwich(sandwichConTomate, "Sandwich con lechuga y tomate");

let sandwichConQueso = new Queso(sandwichConTomate);
ServicioSandwich.mostrarSandwich(sandwichConQueso, "Sandwich con lechuga, tomate y queso");
