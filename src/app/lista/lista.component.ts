import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  alunos: string[] = [];

  constructor(private alunoService: AlunoService) {
    this.alunos = this.alunoService.getAlunos();
  }
}
