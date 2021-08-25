import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  tarefa: Tarefa;
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
