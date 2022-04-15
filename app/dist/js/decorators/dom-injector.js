export function DOMInjector(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const get = () => {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando elemento ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get });
    };
}
