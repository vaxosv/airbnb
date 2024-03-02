import { Component } from '@angular/core';
import { UrlService } from '../services/URL/url.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AmenitiesService } from '../services/amenities/amenities.service';
import { DateService } from '../services/date/date.service';
import { DatePipe } from '@angular/common';
import { MatButton } from '@angular/material/button';

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
  ) {}

  copyURL(): string {
    navigator.clipboard.writeText(this.urlService.baseURl);
    this.snackBar.open('Copyed');
    return this.urlService.generateURL({
      amenity: this.amenitiesService.amenities.value,
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
    window.open(this.copyURL());
  }
}
