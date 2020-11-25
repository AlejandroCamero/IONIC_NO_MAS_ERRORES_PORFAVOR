import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TodoService, todo } from 'src/app/services/todo.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})

export class ListadoPage implements OnInit {

  public fichas :any = [];
  public fechas :any = [];
  public fichas2 :any = [];
  public fichasVer :any = [];

  constructor(public authservice : AuthService, public todoservice : TodoService) { }

  desde: Date = new Date();
  hasta: Date = new Date();

  ngOnInit() {
    this.todoservice.getFichas().subscribe( todos => {

      this.fichas=todos;
      })
  }

  obtenerFechas(){

    this.todoservice.getFecha().subscribe( dates => {

      this.fechas=dates;
    })
  }

  filtrarFechas(){
    this.todoservice.getFichas().subscribe( todos => {

      this.obtenerFechas();
      this.fichas2=todos;
      let contador = 0;
      let contador2 = 0;
      while(todos.length>contador){

        if(this.fichas2[contador].date>= this.desde && this.fichas2[contador].date<=this.hasta){

          this.fichasVer[contador2]=this.fichas2[contador];
          contador2=contador2+1;
        }

        contador=contador+1;
      }

      this.fichas=this.fichasVer;
      console.log(this.fichas);
      })
  }
}
