
const nombre = "carlos";
const apellido = "gutierrez";
const nombreCompleto = ` ${nombre} ${apellido}`;

//console.log(nombreCompleto)

export function getSaludo(nombre='Diana') {
    return 'Hola '+nombre+'!';
}

//console.log(`Este es un texto: ${ getSaludo(nombre)}`)