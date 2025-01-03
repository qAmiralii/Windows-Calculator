import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-calculator',
  imports: [HeaderComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  current: string = '0';
  prev: string = '0';
  op: string = '';
  g: number = 0;
  digit(d: string) {
    this.current = Number(this.current + d).toString();
  }
  operator(o: string) {
    this.prev = this.current;
    this.current = '0';
    this.op = o;
  }
  dot() {
    if (!this.current.includes('.')) {
      this.current += '.';
    }
  }

  mosavi() {
    let b = Number(this.prev)
    let a = Number(this.current)
    switch (this.op) {
      case '+':
        this.current = (a + b).toString()
        break;
      case '-':
        this.current = (a - b).toString()
        break;
      case 'X':
        this.current = (a * b).toString();
        break;
      case '/':
        this.current = (b / a).toString();
        break;
      case 'x^2':
        this.current = (Math.pow(b,2)).toString();
        this.prev = "sqr(" + (b).toString(); +")"
        break;
      case '%':
        this.current = (a / 100).toString();
      break;
      default:
        break;
    }

  }
  drst() {
    this.g = Number(this.prev);
  }
  khali() {

  }
  clear() {
    this.current = "0";
  }
  clear_all() {
    this.current = "0";
    this.prev = "";
    this.op = "";
  }
}
