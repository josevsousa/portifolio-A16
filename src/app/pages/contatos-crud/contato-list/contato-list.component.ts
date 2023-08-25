import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { iContato } from 'src/app/interfaces/contato';
import { ContatoService } from 'src/app/services/contato.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contato-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {

  contatoService: ContatoService =  inject(ContatoService);
  contatos$!: Observable<iContato[]>;

  ngOnInit(){
    this.contatos$ = this.contatoService.getContatos();
  }

  deleteContato(contato: iContato){
    if(confirm(`Quer mesmo deletar ${contato.nome}?`)){
      this.contatoService.deleteContato(String(contato.uid));
    }
  }


}
