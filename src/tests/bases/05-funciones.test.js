import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../bases/05-funciones';

describe('pruebas en 05-funciones', ()=> {

    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABCD123',
            username: 'ElPapi1502'
        }

        const user=getUser();

        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Jose';

        const user=getUsuarioActivo(nombre);
        
        const userActivoTest = {
         
            uid: 'ACB566',
            username: nombre
        }

        expect(user).toEqual(userActivoTest);
    });
})