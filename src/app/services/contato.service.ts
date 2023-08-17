import { Injectable, inject } from '@angular/core';

import { iContato } from 'src/app/interfaces/contato';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  firestore: Firestore = inject(Firestore);
  contato_data$: Observable<iContato[]>;

  constructor(
    ) {
        const contato_data_colletion = collection(this.firestore, '/contatos');
        this.contato_data$ = collectionData(contato_data_colletion);
    }

    addContato(form: iContato){
      console.log(form);
    }

    getContatos(){
      return this.contato_data$;
    }

}
