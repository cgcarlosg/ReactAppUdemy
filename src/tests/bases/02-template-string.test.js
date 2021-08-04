import '@testing-library/jest-dom';
import {getSaludo} from '../../bases/02-template-string';

describe('pruebas en 02-teplate-string.js', ()=> {
    test('getSaludo debe de retornar Hola carlos!', () => {
        const nombre = 'carlos';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+nombre+'!');
    });

    test('getSaludo debe de retornar Hola Diana! si no se pasa argumento nombre', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Diana!');
    })
})