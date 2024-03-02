import { Component } from '@angular/core';
import { AmenitiesService } from '../services/amenities/amenities.service';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [MatButton, MatCheckbox, ReactiveFormsModule],
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.css',
})
export class AmenitiesComponent {
  constructor(public amenitiesService: AmenitiesService) {}

  ngOnInit(): void {
    this.amenitiesService.init();
  }
}
