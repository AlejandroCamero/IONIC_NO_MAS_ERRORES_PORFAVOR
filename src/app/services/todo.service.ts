import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface todo{
  date : Date
  title : string
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db : AngularFirestore, private auth: AuthService) { }

  getFichas(){

    return this.db.collection('fichas').snapshotChanges().pipe(map( todos =>{

      return todos.map(t => {

        let datos = t.payload.doc.data() as todo;
        return datos;
      }
        )
    }
      ))
  }

  getFecha(){

    return this.db.collection('fichas').snapshotChanges().pipe(map( dates =>{

      return dates.map(t => {

        const datos = t.payload.doc.data() as todo;
        return datos.date;
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
