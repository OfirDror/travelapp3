import { Component, OnInit } from '@angular/core';
import { Trip } from '../../app/TripList/trip.model';
import { TripDataService } from '../TripList/tripdata.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  private adding_trip : Boolean = false;
  private currentTrip : Trip = new Trip({
  	name: ""
  })

  constructor(private tripDataService: TripDataService, private router: Router) { }

  ngOnInit() {
    this.currentTrip = new Trip();
  	this.adding_trip = true;
  }

  onSubmit(trip) {
    this.saveTrip(trip);
  }

  saveTrip(trip) {
    console.log("saveTrip", trip);
    this.tripDataService.save(trip).subscribe(result => {
      this.adding_trip = false;
      this.router.navigate(['trips']);
    });
  }

  cancelClicked() {
    this.router.navigate(['trips']);
  }
}
