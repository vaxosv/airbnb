import { Injectable } from '@angular/core';
import { Amenity } from '../../database/amenityes';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  baseURl: string =
    'https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-04-01&monthly_length=3&monthly_end_date=2024-07-01&category_tag=Tag%3A8144&price_filter_input_type=0&channel=EXPLORE&date_picker_type=calendar&source=structured_search_input_header&search_type=filter_change';
  // baseURl: string =
  //   'https://www.airbnb.com/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2024-04-01&monthly_length=3&monthly_end_date=2024-07-01&category_tag=Tag%3A8188&price_filter_input_type=0&channel=EXPLORE';

  generateURL({
    amenity,
    date,
    room,
  }: {
    amenity: Array<Amenity>;
    date: any;
    room: string;
  }): string {
    let url = '';

    if (date.start && date.end) {
      url += `&checkin=${date.start}&checkout=${date.end}`;
    }

    if (room) {
      url += room;
    }

    amenity.forEach((amenity) => {
      if (amenity.isChecked) {
        url += `&amenities%5B%5D=${amenity.id}`;
      }
    });

    this.baseURl += url;

    return this.baseURl;
  }
}
