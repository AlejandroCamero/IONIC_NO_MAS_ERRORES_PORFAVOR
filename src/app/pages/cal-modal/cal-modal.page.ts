import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements OnInit {

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  viewTitle: string;
  selectedDate = new Date();
  userUid: string;

  eventSource = [];
  
  event = {
    title: '',
    startTime: null,
    endTime: '',
    allDay: true
  };
 
  modalReady = false;
 
  constructor(private modalCtrl: ModalController,private db: AngularFirestore) {
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
 
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;      
    }, 0);
  }
 
  save() {
    const start = this.selectedDate;
		const end = this.selectedDate;
		end.setMinutes(end.getMinutes() + 60);

		const event = {
		title: this.event.title,
		startTime: start,
		endTime: end,
		allDay: false
		};

		this.db.collection('faltas').add(event);
    this.modalCtrl.dismiss({event: this.event})
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onTimeSelected(ev) {    
    this.event.startTime = new Date(ev.selectedTime);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
