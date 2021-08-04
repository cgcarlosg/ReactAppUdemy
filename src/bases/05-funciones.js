const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

//console.log(saludar3('Hoyos'));
//console.log(saludar4());

//const getUser = () => {
//    return {
//        uid: 'ABCD123',
//        username: 'ElPapi1502'
//    }
//}
// sin el returns

export const getUser = () => ({
        uid: 'ABCD123',
        username: 'ElPapi1502'
    });

//console.log(getUser())

// tareas
export const getUsuarioActivo = (nombre) => (
    {
        uid: 'ACB566',
        username: nombre
    }
)

const usuarioActivo = getUsuarioActivo('Fernando');
//console.log(usuarioActivo);

