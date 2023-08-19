import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { ContatoService } from 'src/app/services/contato.service';
import { iContato } from 'src/app/interfaces/contato';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contato-add.component.html',
  styleUrls: ['./contato-add.component.css']
})
export class ContatoAddComponent {

  enviado: boolean = false;
  
  formulario = new FormGroup(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      messagem: new FormControl('', Validators.required),
    }
  );

    sendForm(){
    console.log(`Nome: ${this.formulario.value.nome}, Email: ${this.formulario.value.email}`);
    
    this.formulario.reset();
    this.enviado = true;
    setTimeout(()=>{
      this.enviado = false;
    }, 3000)
  }



}
