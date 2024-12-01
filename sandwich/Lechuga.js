const DecoradorSandwich = require('./DecoradorSandwich'); // Importamos DecoradorSandwich

// Decorador para agregar Lechuga
class Lechuga extends DecoradorSandwich {
    constructor(sandwich) {
        super(sandwich);  // Pasamos la instancia del sandwich
    }

    getDescripcion() {
        return this.sandwich.getDescripcion() + " + Lechuga";
    }

    getPrecio() {
        return this.sandwich.getPrecio() + 3;
    }
}

module.exports = Lechuga;
