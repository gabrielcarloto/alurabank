import { Negociacao } from '../models/negociacao.js';
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados')
            .then((r) => r.json())
            .then((res) => {
            return res.map((data) => {
                return new Negociacao(new Date(), data.vezes, data.montante);
            });
        });
    }
}
