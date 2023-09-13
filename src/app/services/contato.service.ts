import { Injectable, inject } from '@angular/core';

import { iContato } from 'src/app/interfaces/contato';
import { Firestore, addDoc, collection, collectionData, getDocs, query, where, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  firestore:Firestore = inject(Firestore);

    addContato(contato: iContato){
      const contatoAdd = collection(this.firestore, 'contatos');
      addDoc(contatoAdd, contato);
    }

    getContatos(){
      const contatos = collection(this.firestore, 'contatos');
      let q = query(contatos);
      return collectionData(q) as unknown as Observable<iContato[]>;
    }

    async deleteContato(uid: string){
      const contatos = collection(this.firestore, 'contatos');
      let q = query(contatos, where('uid', '==', uid));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (document) => {
        const docRef = doc(this.firestore, 'contatos', document.id );
          await deleteDoc(docRef)
      })
    }

}
