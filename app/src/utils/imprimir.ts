import { Imprimivel } from '../interfaces/imprimivel.js';

export function imprimir(...objetos: Imprimivel[]) {
  objetos.forEach((obj) => {
    console.log(obj.paraTexto());
  });
}
