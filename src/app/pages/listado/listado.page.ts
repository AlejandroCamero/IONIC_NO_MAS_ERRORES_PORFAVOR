import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService } from 'src/app/services/todo.service';
//import {TodoService} from '../services/todo.service';

interface todo{
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

  ngOnInit() {

    this.todoservice.getFichas().subscribe( todos =>

      todos.map( todo =>{

        const datos : todo=todo.payload.doc.data() as todo;
        this.fichas.push(datos);
      })
      )
  }

}
