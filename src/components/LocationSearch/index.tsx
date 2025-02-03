import { Fragment, useState } from "react";

import type { Place } from "../../api/Place";
import { search } from "../../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [term, setTerm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const results = await search(term);

    if (results.length !== 0) {
      setPlaces(results);
      setTerm("");
      setError(null);
    } else {
      setError("No results found");
    }
    setLoading(false);
  };

  return (
    <div data-testid="location-search">
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
          <button
            className={` text-xs text-white font-bold py-2 px-4 rounded ${
              loading || !term
                ? "cursor-not-allowed bg-gray-500"
                : "bg-green-500"
            }`}
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {error ? (
        <p className="text-sm text-red-500 py-4">
          No results found for <b>"{term}"</b>. Please check your spelling and
          try again{" "}
        </p>
      ) : (
        places.length > 0 && (
          <>
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
          </>
        )
      )}
    </div>
  );
}
