import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  number1:number = 0;
  number2:number= 0;
  result:number = 0;

  AddNumber():void {
    this.result = this.number1 + this.number2;
  }

  SubtrackNumber():void{
    this.result = this.number1 - this.number2;
  }
  
  MultiplyNumber():void{
    this.result = this.number1 * this.number2;
  }

  DivideNumber():void{
    this.result = this.number1 / this.number2;
  }

  ResultP():void{
    this.result;
  }
}
