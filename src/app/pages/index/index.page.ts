import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // async logout(){
  //     this.menu.enable(false);
  //     localStorage.clear(); //becausae i have information from user
  //     this.backToWelcome();
  //   }
  

}
