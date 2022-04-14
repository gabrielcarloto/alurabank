// <T> = declara o tipo pela classe filha
export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(
    seletor: string,
    escapar?: boolean /* ? = torna o parâmetro opcional */,
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

    if (this.escapar) {
      template = template.replace(/<script[\s\S]*?<\/script>/, '');
    }

    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
