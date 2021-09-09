import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value: number = 5;

  isDestroyedCicle: boolean = false;

  mudarValor(){
    this.value ++;
  }

  destroyCycle(){
    this.isDestroyedCicle = true;
  }
}
