import { Routes } from '@angular/router';
import { TripListComponent } from './TripList/tripList.component';
import { NewTripComponent } from './NewTrip/new-trip.component';

export const routes: Routes = [
  { path: 'trips', component: TripListComponent },
  { path: 'newTrip', component: NewTripComponent }
];