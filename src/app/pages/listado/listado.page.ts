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
  mensajeError: string;
  ngOnInit() {
    this.todoservice.getFichas().subscribe( todos => {

      this.fichas=todos;
      })
  }

  filtrarFechas(){

    this.todoservice.getFichas().subscribe( todos => {

      this.fichas2=todos;
      this.fichasVer = [];
      this.mensajeError = null;
      let contador = 0;
      let contador2 = 0;
      while(todos.length>contador){

        if(this.desde>this.hasta){

          this.mensajeError="Error, la fecha izquierda (Desde) debe ser menor que la fecha derecha (Hasta)";
          break;
        }else if(this.fichasVer==[]){

          this.mensajeError="Error, introduzca los valores para el filtro";
        }

        if(this.fichas2[contador].date>= this.desde && this.fichas2[contador].date<=this.hasta){

          this.fichasVer[contador2]=this.fichas2[contador];
          console.log(this.fichas2[contador].date);
          console.log(contador);
          contador2=contador2+1;
        }

        contador=contador+1;
      }

      console.log("antes de fichasVer");
      console.log(contador);
      this.fichasVer.lenght=contador2;
      this.fichas=this.fichasVer;
      console.log("después de fichasVer");
      console.log(this.fichasVer);
      })
  }
}
