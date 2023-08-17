import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { ContatoService } from 'src/app/services/contato.service';
import { iContato } from 'src/app/interfaces/contato';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  
  enviado: boolean = false;
  contatoService: ContatoService = inject(ContatoService);
  contatos: Observable<iContato[]>;

  formulario = new FormGroup(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      messagem: new FormControl('', Validators.required),
    }
  )

  constructor(){
    this.contatos = this.contatoService.getContatos()
  }

  // sendForm(){
  //   console.log(`Nome: ${this.formulario.value.nome}, Email: ${this.formulario.value.email}`);
    
  //   this.formulario.reset();
  //   this.enviado = true;
  //   setTimeout(()=>{
  //     this.enviado = false;
  //   }, 3000)
  // }
  
  sendForm(){
    //  const uid = this.contatos.crea

  }

}
