import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Pipe, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage implements OnInit {

  selectedDate = new Date();

  fecha = '';
  eventSource = [];
  viewTitle: string;
  userUid: string;
  public faltas: any = [];

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  events=[];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private modalCtrl: ModalController,private db: AngularFirestore, private authservice: AuthService, private todo: TodoService) {
    this.db.collection('faltas').snapshotChanges().subscribe(colSnap => {
			this.eventSource = [];
			colSnap.forEach(snap => {
          const event: any = snap.payload.doc.data();
          event.id = snap.payload.doc.id;
          event.startTime = event.startTime.toDate();
          event.endTime = event.endTime.toDate();
          console.log(event);
          this.eventSource.push(event);
			});
    });
  }

  ngOnInit() {
  }

  onTimeSelected(ev) {
    this.selectedDate = ev.selectedTime;
  }

  next(){
    this.myCal.slideNext();
  }

  back(){
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  addFaltaJustificada(){
    const start = this.selectedDate;
		const end = this.selectedDate;
		end.setMinutes(end.getMinutes() + 60);

		  const event = {
			title: 'Falta justificada',
			startTime: start,
			endTime: end,
			allDay: false
		};

		  this.db.collection('faltas').add(event);
  }

  addFaltaInjustificada(){
    const start = this.selectedDate;
		  const end = this.selectedDate;
		  end.setMinutes(end.getMinutes() + 60);

		  const event = {
			title: 'Falta injustificada',
			startTime: start,
			endTime: end,
			allDay: false
		};

		  this.db.collection('faltas').add(event);
  }

  
}
