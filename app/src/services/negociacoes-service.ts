import { NegociacoesDoDia } from '../interfaces/negociacao-do-dia.js';
import { Negociacao } from '../models/negociacao.js';

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then((r) => r.json())
      .then((res: NegociacoesDoDia[]) => {
        return res.map((data) => {
          return new Negociacao(new Date(), data.vezes, data.montante);
        });
      });
  }
}
