import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() data: any;
  @Output() leaveOne = new EventEmitter();

  house = {
    doorOpened: false,
    color: 'White'
  };

  constructor() { }

  ngOnInit(): void {
  }

  leaveProperty() {
    this.leaveOne.emit();
  }

}
