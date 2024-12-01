// clase para gestionar los sandwiches 
class ServicioSandwich {
    static mostrarSandwich(sandwich, mensaje) {
        console.log(mensaje + ": " + sandwich.getDescripcion() + " - $" + sandwich.getPrecio());
    }
}

module.exports = ServicioSandwich;

