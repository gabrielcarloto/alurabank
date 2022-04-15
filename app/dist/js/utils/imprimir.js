export function imprimir(...objetos) {
    objetos.forEach((obj) => {
        console.log(obj.paraTexto());
    });
}
