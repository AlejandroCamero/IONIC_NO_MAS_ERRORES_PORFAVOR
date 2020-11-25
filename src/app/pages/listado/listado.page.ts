import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from 'src/app/services/todo.service';

export interface todo{
  date : Date
  title : string
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})

export class ListadoPage implements OnInit {

  public fichas :any = [];

  constructor(public authservice : AuthService, public todoservice : TodoService) { }

  desde: Date = new Date();
  hasta: Date = new Date();

  filtrarFecha(){

    console.log(this.desde);
    console.log(this.hasta);
  }

  ngOnInit() {

    this.todoservice.getFichas().subscribe( todos => {

      this.fichas=todos;
      })
    }
}
