## Proyecto de Sandwiches con el Patrón Decorator en Node.js
Este proyecto implementa el patrón de diseño Decorator en Node.js, que permite agregar características adicionales a un objeto de manera dinámica. En este caso, se crea un sandwich base y se le agregan ingredientes (lechuga, tomate, queso) utilizando decoradores, sin modificar la clase original del sandwich.

## Estructura del Proyecto

│   index.js                 # Punto de entrada de la aplicación 
│   package-lock.json        # Archivo de dependencias
│   package.json             # Archivo de configuración de dependencias
│   README.md                # Documentación del proyecto
│
└───sandwich                 # Clases para los decoradores de sandwich
        DecoradorSandwich.js # Clase base para los decoradores de sandwich
        Lechuga.js           # Decorador para agregar lechuga al sandwich 
        Queso.js             # Decorador para agregar queso al sandwich 
        Sandwich.js          # Clase base para el sandwich 
        SandwichBase.js      # Implementación de un sandwich base (pan) 
        ServicioSandwich.js  # Servicio para mostrar el sandwich con sus ingredientes
        Tomate.js            # Decorador para agregar queso al sandwich 


## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flujo de ejecución
Sandwich base: Pan - $5
Sandwich con lechuga: Pan + Lechuga - $8
Sandwich con lechuga y tomate: Pan + Lechuga + Tomate - $11
Sandwich con lechuga, tomate y queso: Pan + Lechuga + Tomate + Queso - $15

## Clases principales y metodos
1. Clase Sandwich (sandwich/Sandwich.js) --> Clase base para representar un sandwich.
**Metodos principales**
    1. getDescripcion() --> Devuelve la descripción del sandwich.
    2. getPrecio() --> Devuelve el precio del sandwich.
2. Clase SandwichBase (sandwich/SandwichBase.js) --> Implementación de un sandwich base (solo pan).
**Metodos principales**
    1. getDescripcion() -->Devuelve "Pan".
    2. getPrecio() --> Devuelve el precio base de $2.
3. Clase DecoradorSandwich (sandwich/DecoradorSandwich.js) -->Clase base para los decoradores que agregan ingredientes al sandwich.
**Metodos principales**
    1. getDescripcion() --> Devuelve la descripción del sandwich con el ingrediente adicional.
    2. getPrecio() --> Devuelve el precio del sandwich con el ingrediente adicional.
4. Clase Lechuga (sandwich/Lechuga.js) --> Decorador para agregar lechuga al sandwich.
**Metodos principales**
    1. getDescripcion(): Agrega "Lechuga" a la descripción del sandwich.
2   . getPrecio(): Incrementa $1 al precio del sandwich.
5. Clase Tomate (sandwich/Tomate.js) --> Decorador para agregar tomate al sandwich.
**Metodos principales**
1. getDescripcion(): Agrega "Tomate" a la descripción del sandwich.
2. getPrecio(): Incrementa $1 al precio del sandwich.

6. Clase Queso (sandwich/Queso.js) --> Decorador para agregar queso al sandwich.
**Metodos principales**
    1. getDescripcion() --> Agrega "Queso" a la descripción del sandwich.
    2. getPrecio() --> Incrementa $2 al precio del sandwich.
7. Clase ServicioSandwich (sandwich/ServicioSandwich.js) --> Clase para gestionar y mostrar el sandwich con sus ingredientes y precios.
**Metodos principales**
    1. mostrarSandwich(sandwich) --> Muestra la descripción y precio del sandwich.


## Implementación del Patrón Decorador
El patrón Decorador se utiliza para añadir funcionalidades adicionales a los objetos de manera flexible y sin modificar la clase base. En este proyecto, el Sandwich es la clase base y se van agregando ingredientes adicionales utilizando los decoradores Lechuga, Tomate y Queso. Cada decorador envuelve un objeto Sandwich y modifica su comportamiento, como la descripción y el precio, sin modificar la clase Sandwich directamente. Este patrón es útil para agregar de manera dinámica ingredientes al sandwich sin necesidad de crear una clase para cada combinación posible.