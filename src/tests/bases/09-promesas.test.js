import {getHeroeByIdAsync} from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe("pruebas con promesas", ()=>{

    test('getHeroeByIdAsyn debe de retornar un Heroe async', (done)=>{

        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    test('debe de obtener un error si el heroe por id no existe', (done)=>{

        const id=10;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe('no se pudo encontrar el heroe');
            done();
        })
    })
})