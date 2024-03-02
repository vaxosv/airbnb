export interface Room {
  label: string;
  value: string;
}

export const rooms: Array<Room> = [
  { label: 'Entire', value: `&room_types%5B%5D=Entire%20home%2Fapt` },
  { label: 'Private', value: `&room_types%5B%5D=Private%20room` },
  { label: 'Shared', value: `&room_types%5B%5D=Shared%20room` },
];
