import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import type { Place } from "../api/Place";

import "leaflet/dist/leaflet.css";

interface MapProps {
  place: Place | null;
}

export default function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      console.log("Got in here");
      mapRef.current.flyTo([place.latitude, place.longitude], 9);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom
      className="h-full"
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
