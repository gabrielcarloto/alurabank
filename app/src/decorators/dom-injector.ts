export function DOMInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    let elemento: HTMLElement;

    const get = () => {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(
          `Buscando elemento ${seletor} para injetar em ${propertyKey}`,
        );
      }

      return elemento;
    };

    Object.defineProperty(target, propertyKey, { get });
  };
}
