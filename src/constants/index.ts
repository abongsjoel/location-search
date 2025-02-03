import type { Place } from "../api/Place";
import type { SearchResponse } from "../api/search";

export const places: Place[] = [
  {
    id: 35564783,
    name: "Akum, Santa, Mezam, Northwest, Cameroon",
    longitude: 10.156404,
    latitude: 5.887687,
  },
  {
    id: 38593976,
    name: "Akum, Soroti City, Eastern Region, Uganda",
    longitude: 33.6480425,
    latitude: 1.769132,
  },
];

export const searchResponse: SearchResponse = {
  features: [
    {
      geometry: {
        coordinates: [10.156404, 5.887687],
      },
      properties: {
        place_id: 35564783,
        display_name: "Akum, Santa, Mezam, Northwest, Cameroon",
      },
    },
    {
      geometry: {
        coordinates: [33.6480425, 1.769132],
      },
      properties: {
        place_id: 38593976,
        display_name: "Akum, Soroti City, Eastern Region, Uganda",
      },
    },
  ],
};
