import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { ContatoService } from 'src/app/services/contato.service';
import { iContato } from 'src/app/interfaces/contato';
import { Observable } from 'rxjs';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contato-add.component.html',
  styleUrls: ['./contato-add.component.css']
})
export class ContatoAddComponent {
  contatoService: ContatoService = inject(ContatoService);
  contatos$!: Observable<iContato[]>;

  enviado: boolean = false;
  

  formulario = new FormGroup(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      messagem: new FormControl('', Validators.required),
    }
  );

    // ngOnInit(){
    //   this.contatos$ = this.contatoService.getContatos();
    // }


    sendForm(){
      this.contatoService.addContato({
        uid: new Date().getTime().toString(),
        ...this.formulario.getRawValue(),
      }as iContato);
      
    
      this.formulario.reset();
      this.enviado = true;

      setTimeout(()=>{

        this.enviado = false;
      }, 3000);

    }

    // deleteContato(contato: iContato){
    //   if(confirm(`Quer mesmo deletar ${contato.nome}?`)){
    //     this.contatoService.deleteContato(String(contato.uid));
    //   }
    // }



}
