import { useState } from "react";

import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";
import type { Place } from "./api/Place";

function App() {
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen flex">
      <div className="p-2 w-48">
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="flex-1">
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
