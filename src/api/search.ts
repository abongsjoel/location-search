import type { Place } from "./Place";
export interface SearchResponse {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      display_name: string;
      place_id: number;
    };
  }[];
}

export const search = async (term: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  );
  const data: SearchResponse = await res.json();

  const places: Place[] = data.features.map((feature) => ({
    id: feature.properties.place_id,
    name: feature.properties.display_name,
    longitude: feature.geometry.coordinates[0],
    latitude: feature.geometry.coordinates[1],
  }));

  return places;
};
