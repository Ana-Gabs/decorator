const DecoradorSandwich = require('./DecoradorSandwich'); // Importamos DecoradorSandwich

// Decorador para agregar Tomate
class Tomate extends DecoradorSandwich {
    constructor(sandwich) {
        super(sandwich);  
    }

    getDescripcion() {
        return this.sandwich.getDescripcion() + " + Tomate";
    }

    getPrecio() {
        return this.sandwich.getPrecio() + 3;
    }
}

module.exports = Tomate;
