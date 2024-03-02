import { Component } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { Room, rooms } from '../database/room';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css',
})
export class RoomComponent {
  options: Array<Room> = rooms;

  constructor(private roomService: RoomService) {}

  optionChange(value: Room) {
    this.roomService.setRoom(value.value);
  }
}
