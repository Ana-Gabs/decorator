const Sandwich = require('./Sandwich'); 

// implementación de un sandwich base
class SandwichBase extends Sandwich {
    constructor() {
        super();
        this.descripcion = "Pan";
        this.precio = 5;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getPrecio() {
        return this.precio;
    }
}

module.exports = SandwichBase;



