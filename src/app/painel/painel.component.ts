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
  constructor() {}

  ngOnInit() {
  }

}
