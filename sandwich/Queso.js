const DecoradorSandwich = require('./DecoradorSandwich'); // Importamos DecoradorSandwich

// Decorador para agregar Queso
class Queso extends DecoradorSandwich {
    constructor(sandwich) {
        super(sandwich);  // Pasamos la instancia del sandwich
    }

    getDescripcion() {
        return this.sandwich.getDescripcion() + " + Queso";
    }

    getPrecio() {
        return this.sandwich.getPrecio() + 4;
    }
}

module.exports = Queso;
