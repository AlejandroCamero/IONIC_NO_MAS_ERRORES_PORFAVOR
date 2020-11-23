import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();

  constructor(private db: AngularFirestore,) {
    this.db.collection(`faltas`).snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap => {
        let event:any = snap.payload.doc.data();
        event.id = snap.payload.doc.id;
        console.log(event);
        this.eventSource.push(event);
      });
    });
  }

  addFaltaJustificada() {
    let event = {
      title: 'Falta Justificada ',
      allDay: false,
    };

    this.db.collection(`faltas`).add(event);
  }

  addFaltaInjustificada() {
    let event = {
      title: 'Falta Injustificada ',
      allDay: false,
    };

    this.db.collection(`faltas`).add(event);
  }

  onViewTitleChanged(title) {
    console.log(title);
  }

  onEventSelected(event) {
    console.log(event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  ngOnInit() {
  }

}
