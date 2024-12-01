// clase base Sandwich 
class Sandwich {
    constructor() {
        this.descripcion = "Sandwich básico";
        this.precio = 0;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getPrecio() {
        return this.precio;
    }
}

module.exports = Sandwich;

