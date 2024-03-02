import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Amenity, globalAmenities } from '../../database/amenityes';

@Injectable({
  providedIn: 'root',
})
export class AmenitiesService {
  filtersForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  init() {
    this.filtersForm = this.fb.group({
      amenities: this.fb.array([]),
    });

    globalAmenities.forEach((amenity) => {
      this.addAmenity(amenity);
    });
  }

  amenityGroup(amenity: Amenity): FormGroup {
    return this.fb.group({
      isChecked: amenity.isChecked,
      name: amenity.name,
      id: amenity.id,
    });
  }

  get amenities(): FormArray {
    return this.filtersForm.get('amenities') as FormArray;
  }

  addAmenity(amenity: Amenity): void {
    this.amenities.push(this.amenityGroup(amenity));
  }

  removeSkill(i: number) {
    this.amenities.removeAt(i);
  }
}
