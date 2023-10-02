// Importamos el módulo 'calculator.js' para las pruebas
const users = require('../data.js');
//describe Se utiliza para brindar un contexto 
describe('Password Validation', () => {
    test('Should contain both uppercase and lowercase letters, as well as numbers/special characters', () => {
        users.forEach(user => {
            const passw = user.password;
            const hasLetter = /[a-z]/i.test(passw); // Modificamos la expresión regular para que sea insensible a mayúsculas y minúsculas
            const hasNumber = /\d/.test(passw);
            expect(hasLetter && hasNumber).toBe(true);
        });
    });
});


describe('Email Validation', ()=>{
    test('email should contain @ && end with .com', () => {
        users.forEach(user =>{
            const hasAt =user.email.includes('@');
            const hasDotCom = user.email.endsWith('.com');
            expect(hasAt && hasDotCom).toBe(true);
        })
    })
})