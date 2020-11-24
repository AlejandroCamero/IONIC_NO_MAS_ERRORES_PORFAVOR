import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private db : AngularFirestore) { }

  getFichas(){

    return this.db.collection('fichas').snapshotChanges()
  }
}
