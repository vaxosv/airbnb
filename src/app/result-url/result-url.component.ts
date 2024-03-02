import { Component } from '@angular/core';
import { UrlService } from '../services/URL/url.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AmenitiesService } from '../services/amenities/amenities.service';
import { DateService } from '../services/date/date.service';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-result-url',
  standalone: true,
  providers: [DatePipe],
  templateUrl: './result-url.component.html',
  styleUrl: './result-url.component.css',
  imports: [MatButton],
})
export class ResultURLComponent {
  constructor(
    public urlService: UrlService,
    private snackBar: MatSnackBar,
    private amenitiesService: AmenitiesService,
    private dateService: DateService,
    private datePipe: DatePipe,
    private roomService: RoomService,
  ) {}

  copyURL(): void {
    navigator.clipboard.writeText(this.generateURL());
    this.snackBar.open('Copyed', '', { duration: 800 });
  }

  generateURL(): string {
    return this.urlService.generateURL({
      amenity: this.amenitiesService.amenities.value,
      room: this.roomService.room$.value,
      date: {
        start: this.datePipe.transform(
          this.dateService.range.value.start,
          'yyyy-MM-dd',
        ),
        end: this.datePipe.transform(
          this.dateService.range.value.end,
          'yyyy-MM-dd',
        ),
      },
    });
  }

  openURL() {
    window.open(this.generateURL());
  }
}
