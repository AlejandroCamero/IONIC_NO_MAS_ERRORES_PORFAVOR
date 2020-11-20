import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.page.html',
  styleUrls: ['./creacion.page.scss'],
})
export class CreacionPage implements OnInit {

  @Input=title;

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
