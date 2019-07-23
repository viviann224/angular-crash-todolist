import { Component, OnInit } from '@angular/core';

import{ Todo} from "../../model/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[];

  constructor() { }

  ngOnInit() {
  this.todos=
  [
  {id:1,
  title:"TOdo1",
  completed:false},
  {id:2,
  title:"TOdo2",
  completed:true},
  {id:3,
  title:"TOdo3",
  completed:false}
  ]
  }

}
