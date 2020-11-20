import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.page.html',
  styleUrls: ['./creacion.page.scss'],
})
export class CreacionPage implements OnInit {

  constructor() { }

  creacion = {
    fecha: '',
    actividad: ''
  };

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log(this.creacion);
  }

}
