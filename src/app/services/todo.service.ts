import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import {todo} from 'src/app/pages/listado/listado.page';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db : AngularFirestore) { }

  getFichas(){

    return this.db.collection('fichas').snapshotChanges().pipe(map( todos =>{

      return todos.map(t => {

        const datos = t.payload.doc.data() as todo;
        return datos;
      }
        )
    }
      ))
  }
}
