import { useEffect, useRef } from "react";
import type { Map as LeafletMap, LatLngBoundsExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import type { Place } from "../api/Place";

import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

interface MapProps {
  place: Place | null;
}

const maxBounds: LatLngBoundsExpression = [
  [-90, -180],
  [90, 180],
];

export default function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  useEffect(() => {
    if (mapRef.current && place) {
      console.log("Got in here");
      mapRef.current.flyTo([place.latitude, place.longitude], 9);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[45, 0]}
      zoom={3}
      scrollWheelZoom
      minZoom={3}
      maxBounds={maxBounds}
      className="h-full"
      data-testid="my-map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && (
        <Marker position={[place.latitude, place.longitude]}>
          <Popup>{place.name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
