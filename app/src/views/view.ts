// <T> = declara o tipo pela classe filha
export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(
    seletor: string,
    // ? = torna o parâmetro opcional
    // parâmetros opcionais devem sempre ser os últimos
  ) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM.`);
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
