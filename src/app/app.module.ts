import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TripListComponent } from './TripList/tripList.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NewTripComponent } from './NewTrip/new-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    NavbarComponent,
    NewTripComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
