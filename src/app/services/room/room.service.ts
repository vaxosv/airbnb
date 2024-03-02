import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  room$ = new BehaviorSubject<string>('');

  setRoom(room: string) {
    this.room$.next(room);
  }
}
