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

  fecha1='';
  fecha2='';
  public fichas :any = [];

  constructor(public authservice : AuthService, public todoservice : TodoService) { }

  ngOnInit() {

    this.todoservice.getFichas().subscribe( todos => {

      this.fichas=todos;
      })
    }
}
