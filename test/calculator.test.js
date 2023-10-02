// Importamos el módulo 'calculator.js' para las pruebas
const calc = require('../calculator.js');

// Primer test: Verifica la suma de a & b
test('returns the sum of a & b', () => {
    expect(calc.sum(10, 10)).toBe(20); // Corregido el valor esperado a 20
});

// Segundo test: Verifica el producto de a & b
test('returns the product of a & b', () => {
    expect(calc.multiply(10, 5)).toBe(50); // Corregido el valor esperado a 50
});

// Tercer test: Verifica la potencia de a elevado a la b
test('returns the power of a & b', () => {
    expect(calc.power(2, 3)).toBe(8); // Corregido el valor esperado a 8
});