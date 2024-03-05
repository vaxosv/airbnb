`
1 - Television
4 - Wifi
5 - Air Conditioning
8 - Kitchen
9 - Free Parking On Premises
12 - Pets Allowed
15 - Gym
23 - Free Street Parking
25 - Hot Tub
27 - Indoor Fireplace
30 - Heating
33 - Washer
34 - Dryer
35 - Smoke Alarm
37 - First Aid Kit
39 - Fire Extinguisher
40 - Essentials 1: towels, bed sheets, soap, toilet paper
41 - Shampoo
44 - Hangers
45 - Hair Dryer
46 - Iron
47 - Dedicated Workspace
51 - °Self Check-In
52 - Smart Lock Entry (?)
53 - Keypad Entry (?)
54 - Lockbox
57 - Private Entrance
61 - Bathtub
64 - High Chair
66 - Children's Books & Toys
69 - Fireplace Guards
70 - Babysitter Recommendations
72 - Crib
73 - Room Darkening Shades
74 - Children's Dinnerware
77 - Hot Water
79 - Body Soap
85 - Bed Linens
86 - Essentials 3: extra pillows & blankets
87 - Ethernet Connection
89 - Microwave
90 - Coffee Maker
91 - Refrigerator
92 - Dishwasher
93 - Essentials 4: bowls, plates, cups
94 - Essentials 2: pots, pans, oil, salt, pepper
95 - Oven
96 - Stove
97 - EV Charger
98 - Single Level Home
99 - BBQ Grill
100 - Patio / Balcony
101 - Backyard
102 - Essentials: Beach towels, umbrella, beach blanket, snorkeling gear
103 - Luggage Drop Off Allowed
104 - Long Term Stays Allowed
107 - Cleaning Before Checkout
129 - Host Greets You
132 - Waterfront
133 - Lake Access
137 - Hot Water Kettle
139 - Ceiling Fan
146 - Mini Fridge
153 - Hammock
172 - Kayak
179 - Outdoor Dining Area
185 - Sound System
201 - Bikes
219 - Fire Pit
223 - Sauna
227 - Exercise Equipment
236 - Dining Table
251 - Toaster
258 - Private Pool
280 - Outdoor Furniture
308 - Freezer
322 - Blender
392 - Board Games
394 - Books & Reading Material
415 - Coffee
515 - Ping Pong Table
521 - Pool Table
522 - Portable Fans
527 - Record Player
611 - Shower Gel
625 - Essentials: baking sheet
626 - BBQ Utensils
657 - Conditioner
663 - Laundromat Nearby
664 - Boat Slip
665 - Cleaning Products
667 - Drying Rack For Clothing
671 - Clothing Storage
672 - Wine Glasses
674 - Beach Access
9999 - Security Cameras On Property
248 - Sun loungers
`;

export interface Amenity {
  isChecked: boolean;
  id: number;
  name: string;
}
export const globalAmenities: Array<Amenity> = [
  {
    id: 1,
    name: 'Television',
    isChecked: false,
  },
  {
    id: 4,
    name: 'Wifi',
    isChecked: false,
  },
  {
    id: 5,
    name: 'Air Conditioning',
    isChecked: false,
  },
  {
    id: 8,
    name: 'Kitchen',
    isChecked: false,
  },
  {
    id: 9,
    name: 'Free Parking On Premises',
    isChecked: false,
  },
  {
    id: 12,
    name: 'Pets Allowed',
    isChecked: false,
  },
  {
    id: 15,
    name: 'Gym',
    isChecked: false,
  },
  {
    id: 23,
    name: 'Free Street Parking',
    isChecked: false,
  },
  {
    id: 25,
    name: 'Hot Tub',
    isChecked: false,
  },
  {
    id: 27,
    name: 'Indoor Fireplace',
    isChecked: false,
  },
  {
    id: 30,
    name: 'Heating',
    isChecked: false,
  },
  {
    id: 33,
    name: 'Washer',
    isChecked: false,
  },
  {
    id: 34,
    name: 'Dryer',
    isChecked: false,
  },
  {
    id: 35,
    name: 'Smoke Alarm',
    isChecked: false,
  },
  {
    id: 37,
    name: 'First Aid Kit',
    isChecked: false,
  },
  {
    id: 39,
    name: 'Fire Extinguisher',
    isChecked: false,
  },
  {
    id: 40,
    name: 'Essentials 1: towels, bed sheets, soap, toilet paper',
    isChecked: false,
  },
  {
    id: 41,
    name: 'Shampoo',
    isChecked: false,
  },
  {
    id: 44,
    name: 'Hangers',
    isChecked: false,
  },
  {
    id: 45,
    name: 'Hair Dryer',
    isChecked: false,
  },
  {
    id: 46,
    name: 'Iron',
    isChecked: false,
  },
  {
    id: 47,
    name: 'Dedicated Workspace',
    isChecked: false,
  },
  {
    id: 51,
    name: '°Self Check-In',
    isChecked: false,
  },
  {
    id: 52,
    name: 'Smart Lock Entry (?)',
    isChecked: false,
  },
  {
    id: 53,
    name: 'Keypad Entry (?)',
    isChecked: false,
  },
  {
    id: 54,
    name: 'Lockbox',
    isChecked: false,
  },
  {
    id: 57,
    name: 'Private Entrance',
    isChecked: false,
  },
  {
    id: 61,
    name: 'Bathtub',
    isChecked: false,
  },
  {
    id: 64,
    name: 'High Chair',
    isChecked: false,
  },
  {
    id: 66,
    name: `Children's Books & Toys`,
    isChecked: false,
  },
  {
    id: 69,
    name: 'Fireplace Guards',
    isChecked: false,
  },
  {
    id: 70,
    name: 'Babysitter Recommendations',
    isChecked: false,
  },
  {
    id: 72,
    name: 'Crib',
    isChecked: false,
  },
  {
    id: 73,
    name: 'Room Darkening Shades',
    isChecked: false,
  },
  {
    id: 74,
    name: `Children's Dinnerware`,
    isChecked: false,
  },
  {
    id: 77,
    name: 'Hot Water',
    isChecked: false,
  },
  {
    id: 79,
    name: 'Body Soap',
    isChecked: false,
  },
  {
    id: 85,
    name: 'Bed Linens',
    isChecked: false,
  },
  {
    id: 86,
    name: 'Essentials 3: extra pillows & blankets',
    isChecked: false,
  },
  {
    id: 87,
    name: 'Ethernet Connection',
    isChecked: false,
  },
  {
    id: 89,
    name: 'Microwave',
    isChecked: false,
  },
  {
    id: 90,
    name: 'Coffee Maker',
    isChecked: false,
  },
  {
    id: 91,
    name: 'Refrigerator',
    isChecked: false,
  },
  {
    id: 92,
    name: 'Dishwasher',
    isChecked: false,
  },
  {
    id: 93,
    name: 'Essentials 4: bowls, plates, cups',
    isChecked: false,
  },
  {
    id: 94,
    name: 'Essentials 2: pots, pans, oil, salt, pepper',
    isChecked: false,
  },
  {
    id: 95,
    name: 'Oven',
    isChecked: false,
  },
  {
    id: 96,
    name: 'Stove',
    isChecked: false,
  },
  {
    id: 97,
    name: 'EV Charger',
    isChecked: false,
  },
  {
    id: 98,
    name: 'Single Level Home',
    isChecked: false,
  },
  {
    id: 99,
    name: 'BBQ Grill',
    isChecked: false,
  },
  {
    id: 100,
    name: 'Patio / Balcony',
    isChecked: false,
  },
  {
    id: 101,
    name: 'Backyard',
    isChecked: false,
  },
  {
    id: 102,
    name: 'Essentials: Beach towels, umbrella, beach blanket, snorkeling gear',
    isChecked: false,
  },
  {
    id: 103,
    name: 'Luggage Drop Off Allowed',
    isChecked: false,
  },
  {
    id: 104,
    name: 'Long Term Stays Allowed',
    isChecked: false,
  },
  {
    id: 107,
    name: 'Cleaning Before Checkout',
    isChecked: false,
  },
  {
    id: 129,
    name: 'Host Greets You',
    isChecked: false,
  },
  {
    id: 132,
    name: 'Waterfront',
    isChecked: false,
  },
  {
    id: 133,
    name: 'Lake Access',
    isChecked: false,
  },
  {
    id: 137,
    name: 'Hot Water Kettle',
    isChecked: false,
  },
  {
    id: 139,
    name: 'Ceiling Fan',
    isChecked: false,
  },
  {
    id: 146,
    name: 'Mini Fridge',
    isChecked: false,
  },
  {
    id: 153,
    name: 'Hammock',
    isChecked: false,
  },
  {
    id: 172,
    name: 'Kayak',
    isChecked: false,
  },
  {
    id: 179,
    name: 'Outdoor Dining Area',
    isChecked: false,
  },
  {
    id: 185,
    name: 'Sound System',
    isChecked: false,
  },
  {
    id: 201,
    name: 'Bikes',
    isChecked: false,
  },
  {
    id: 219,
    name: 'Fire Pit',
    isChecked: false,
  },
  {
    id: 223,
    name: 'Sauna',
    isChecked: false,
  },
  {
    id: 227,
    name: 'Exercise Equipment',
    isChecked: false,
  },
  {
    id: 236,
    name: 'Dining Table',
    isChecked: false,
  },
  {
    id: 251,
    name: 'Toaster',
    isChecked: false,
  },
  {
    id: 258,
    name: 'Private Pool',
    isChecked: false,
  },
  {
    id: 280,
    name: 'Outdoor Furniture',
    isChecked: false,
  },
  {
    id: 308,
    name: 'Freezer',
    isChecked: false,
  },
  {
    id: 322,
    name: 'Blender',
    isChecked: false,
  },
  {
    id: 392,
    name: 'Board Games',
    isChecked: false,
  },
  {
    id: 394,
    name: 'Books & Reading Material',
    isChecked: false,
  },
  {
    id: 415,
    name: 'Coffee',
    isChecked: false,
  },
  {
    id: 515,
    name: 'Ping Pong Table',
    isChecked: false,
  },
  {
    id: 521,
    name: 'Pool Table',
    isChecked: false,
  },
  {
    id: 522,
    name: 'Portable Fans',
    isChecked: false,
  },
  {
    id: 527,
    name: 'Record Player',
    isChecked: false,
  },
  {
    id: 611,
    name: 'Shower Gel',
    isChecked: false,
  },
  {
    id: 625,
    name: 'Essentials: baking sheet',
    isChecked: false,
  },
  {
    id: 626,
    name: 'BBQ Utensils',
    isChecked: false,
  },
  {
    id: 657,
    name: 'Conditioner',
    isChecked: false,
  },
  {
    id: 663,
    name: 'Laundromat Nearby',
    isChecked: false,
  },
  {
    id: 664,
    name: 'Boat Slip',
    isChecked: false,
  },
  {
    id: 665,
    name: 'Cleaning Products',
    isChecked: false,
  },
  {
    id: 667,
    name: 'Drying Rack For Clothing',
    isChecked: false,
  },
  {
    id: 671,
    name: 'Clothing Storage',
    isChecked: false,
  },
  {
    id: 672,
    name: 'Wine Glasses',
    isChecked: false,
  },
  {
    id: 674,
    name: 'Beach Access',
    isChecked: false,
  },
  // {
  //   id: 9999,
  //   name: 'Security Cameras On Property',
  //   isChecked: false,
  // },
  {
    id: 248,
    name: 'Sun loungers',
    isChecked: false,
  },
];
