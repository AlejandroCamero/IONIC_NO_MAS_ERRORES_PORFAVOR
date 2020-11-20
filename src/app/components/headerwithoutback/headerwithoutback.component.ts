import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerwithoutback',
  templateUrl: './headerwithoutback.component.html',
  styleUrls: ['./headerwithoutback.component.scss'],
})
export class HeaderwithoutbackComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
