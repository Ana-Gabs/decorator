 const Sandwich = require('./Sandwich'); 

// clase base para los decoradores
class DecoradorSandwich extends Sandwich {
    constructor(sandwich) {
        super();  
        this.sandwich = sandwich;  
    }

    getDescripcion() {
        return this.sandwich.getDescripcion();
    }

    getPrecio() {
        return this.sandwich.getPrecio();
    }
}

module.exports = DecoradorSandwich;
