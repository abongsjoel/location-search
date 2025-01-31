import { Fragment, useState } from "react";

import type { Place } from "../api/Place";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const results = await search(term);
    setPlaces(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="term" className="font-bold">
          Search Location
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          type="text"
          id="term"
          placeholder="Enter a location"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <div className="flex justify-end">
          <button className="bg-blue-500 text-xs text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </form>

      <h1 className="font-bold mt-6">Locations Found</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {places.map((place) => (
          <Fragment key={place.id}>
            <p className="text-sm">{place.name}</p>
            <button
              className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
              onClick={() => onPlaceClick(place)}
            >
              Go
            </button>
            <div className="border-b w-full col-span-2" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
