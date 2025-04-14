import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: string[] = [];

  adicionarAluno(nome: string) {
    this.alunos.push(nome);
  }

  getAlunos(): string[] {
    return [...this.alunos]; // retorna uma cópia
  }
}
