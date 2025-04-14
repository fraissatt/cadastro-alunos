import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../services/aluno.service';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ListaComponent],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome: string = '';

  constructor(private alunoService: AlunoService) {}

  salvarAluno() {
    if (this.nome.trim()) {
      this.alunoService.adicionarAluno(this.nome.trim());
      this.nome = '';
    }
  }
}
