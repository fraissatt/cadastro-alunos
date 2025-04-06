import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome: string = '';
  listas: string[] = [];

  salvarAluno() {
    if (this.nome.trim()) {
      this.listas.push(this.nome.trim());
      this.nome = '';
    }
  }
}
