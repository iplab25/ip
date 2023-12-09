import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic-app';
  m: string;
  f:string;
  changeName(){
    this.title="TypeScript"
    this.run = true
  }
  run:boolean = false
  user=[{name:"Gopi",age:26,gender:"m"},
  {name:"Kannan",age:35,gender:"m"},
  {name:"John",age:23,gender:"m"},
  {name:"Hasini",age:34,gender:"f"}
]

colorName = "yellow"
color="red"
borderStyle="1px solid black"

isBordered = false
name:string = "Angular"
day=new Date()
num=2345.57898766
n=26
}
