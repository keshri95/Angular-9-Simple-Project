import { Component, OnInit, Host } from '@angular/core';
import { PropertyComponent } from '../property/property.component';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {

  parking = {
    cars: 1,
    clean: false
  };

  constructor( @Host() private propertyParent: PropertyComponent) {
  }

  ngOnInit(): void {
  }

  leaveProperty() {
    this.propertyParent.deletePerson();
  }

}
