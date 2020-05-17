import { Component, OnInit, ViewChild } from '@angular/core';
import { HouseComponent } from '../house/house.component';
import { ParkingComponent } from '../parking/parking.component';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  @ViewChild(HouseComponent, {static: false}) house: HouseComponent;
  @ViewChild(ParkingComponent, {static: false}) parking: ParkingComponent;

  propertyInfo = {
    family: 'Simpsons',
    persons: 5
  };

  constructor(private _alert: AlertService) { }

  ngOnInit(): void {
  }

  deletePerson() {
    if (this.propertyInfo.persons <= 0) {
      this.propertyInfo.persons = 6;
    }
    this.propertyInfo.persons--;
  }

  openHouse() {
    this.house.house.doorOpened = true;
    this._alert.openSnackBar('The house door is open!');
  }

  uncleanParking() {
    this.parking.parking.clean = false;
    this._alert.openSnackBar('The parking is unclean!');
  }

}
