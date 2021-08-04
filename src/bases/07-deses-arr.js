const personajes = ['goku', 'vegeta', 'trunks']

const [, p2] = personajes;
//console.log(p2)

export const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros]=retornaArreglo();
//console.log(letras, numeros)

const usesState = (valor) => {
    return [valor, ()=>{
//        console.log('Hola mundo')
    }]
}

const [nombre, setsNombre] = usesState('goku');
//console.log(nombre);
setsNombre();