import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  enviado: boolean = false;

  formulario = new FormGroup(
    {
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      messagem: new FormControl('', Validators.required),
    }
  )

  sendForm(){
    console.log(`Nome: ${this.formulario.value.nome}, Email: ${this.formulario.value.email}`);
    
    this.formulario.reset();
    this.enviado = true;
    setTimeout(()=>{
      this.enviado = false;
    }, 3000)
  }
  
}
