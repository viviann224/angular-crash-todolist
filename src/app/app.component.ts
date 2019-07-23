import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  name:string="brad";

constructor()
{
	console.log("123");
	this.changeName("Joe");
}

changeName(name:string):void{
	this.name=name;
}
}
