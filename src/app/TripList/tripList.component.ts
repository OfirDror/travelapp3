import { Component, OnInit } from '@angular/core';
import { TripDataService } from './tripdata.service';
import { Trip } from './trip.model';

@Component({
  selector: 'app-trips',
  templateUrl: './tripList.component.html',
  styleUrls: ['./tripList.component.css']
})
export class TripListComponent implements OnInit {

  private trips: Trip[] = [];

  constructor(private tripDataService: TripDataService) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.tripDataService.load().subscribe((result) => {
      console.log("Result", result);
      this.trips = result;
    });
  }

  deleteTrip(trip) {
    console.log("deleteTrip", trip);
    this.tripDataService.destroy(trip).subscribe(() => {
      this.reload();
    });
  }
}
