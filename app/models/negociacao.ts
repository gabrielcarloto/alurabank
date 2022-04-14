export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number,
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());

    return data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  // static = torna em método de classe
  public static criaDe(
    dateString: string,
    quantidadeString: string,
    valorString: string,
  ): Negociacao {
    const exp = /-/g;

    const date = new Date(dateString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }
}
