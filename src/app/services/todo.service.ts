import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import {todo} from 'src/app/pages/listado/listado.page';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db : AngularFirestore, private auth: AuthService) { }

  fecha1 : Date;
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

  getFaltas(){

    return this.db.collection('users/'+this.auth.getUserAuth()+"/faltas").snapshotChanges().pipe(map( todos =>{

      return todos.map(t => {

        const datos = t.payload.doc.data() as todo;
        return datos;
      }
        )
    }
      ))
  }

  

  
}
