import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ResultURLComponent } from './result-url/result-url.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { DateComponent } from './date/date.component';
import { OtherComponent } from './other/other.component';
import { RoomComponent } from './room/room.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AmenitiesComponent,
    ResultURLComponent,
    AmenitiesComponent,
    DateComponent,
    OtherComponent,
    RoomComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-fun';
}
