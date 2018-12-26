import { Frase } from './../shared/frase.model';
import { Component, OnInit } from '@angular/core';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  public tentativas = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {}

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificaResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {

        alert('Resposta correta');

        // trocar a pergunta da rodada
        this.rodada++;

        // progresso
        this.progresso = this.progresso + (100 / this.frases.length);
        console.log(this.progresso);

        // atualiza o objeto da frase
       this.atualizaRodada();

      } else {
       // diminuir a variável tentativas
       this.tentativas --;

       if (this.tentativas === -1) {
          alert('Usuario vocÊ perdeu todas as tentativas.');
       }


    }
  }

  public atualizaRodada(): void {

    // define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada];

    // limpar a resposta
    this.resposta = '';
  }
}
