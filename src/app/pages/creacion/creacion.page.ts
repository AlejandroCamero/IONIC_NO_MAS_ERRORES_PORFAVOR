import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.page.html',
  styleUrls: ['./creacion.page.scss'],
})
export class CreacionPage implements OnInit {

  eventSource = [];

  constructor(private db: AngularFirestore,) {
    this.db.collection(`faltas`).snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap => {
        let event:any = snap.payload.doc.data();
        event.id = snap.payload.doc.id;
        event.title = snap.payload.doc.data();
        console.log(event);
        this.eventSource.push(event);
      });
    });
  }

  creacion = {
    fecha: '',
    actividad: ''
  };

  ngOnInit() {
  }

  onSubmitTemplate() {

    let event = {
      title: this.creacion.actividad,
      date: this.creacion.fecha,
    };

    this.db.collection(`fichas`).add(event);
    console.log('Form submit');
    console.log(this.creacion);
  }

}
