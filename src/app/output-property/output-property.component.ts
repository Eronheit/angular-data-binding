import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() hasChangeValue = new EventEmitter();

  increment() {
    this.value++;
    this.hasChangeValue.emit({ newValue: this.value })
  }

  decrement(){
    this.value--;
    this.hasChangeValue.emit({ newValue: this.value })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
