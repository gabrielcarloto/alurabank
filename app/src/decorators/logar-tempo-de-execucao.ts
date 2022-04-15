export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = 'milissegundos';

      if (emSegundos) {
        divisor = 1000;
        unidade = 'segundos';
      }

      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `Tempo de execução do método ${propertyKey}: ${
          (t2 - t1) / divisor
        } ${unidade}`,
      );

      retorno;
    };

    return descriptor;
  };
}
