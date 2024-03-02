import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
} from '@angular/material/form-field';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DateService } from '../services/date/date.service';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [
    MatHint,
    MatFormField,
    MatDateRangeInput,
    MatDatepickerToggle,
    MatDateRangePicker,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css',
})
export class DateComponent {
  constructor(public dateService: DateService) {}
}
