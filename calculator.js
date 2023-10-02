// Definimos un objeto llamado 'calculator' que contiene diversas operaciones matemáticas

const calculator = {
    // Función para realizar la suma de dos números 'a' y 'b'
    sum(a, b) {
        return a + b;
    },

    // Función para realizar la resta de dos números 'a' y 'b'
    substract(a, b) {
        return a - b;
    },

    // Función para realizar la multiplicación de dos números 'a' y 'b'
    multiply(a, b) {
        return a * b;
    },

    // Función para realizar la división de dos números 'a' y 'b'
    division(a, b) {
        return a / b;
    },

    // Función para realizar la potenciación de 'a' elevado a la 'b' (intencional error de ortografía)
    power: (a, b) => a ** b, // Intencional error
}

// Exportamos el objeto 'calculator' para que pueda ser utilizado en otros módulos
module.exports = calculator;