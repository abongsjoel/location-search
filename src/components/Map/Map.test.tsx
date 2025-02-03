import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Map from "./index";
import { Place } from "../../api/Place";

import "@testing-library/jest-dom/vitest";

describe("Map Component", () => {
  const place: Place = {
    id: 34766959,
    name: "Bamenda, Mezam, Northwest, Cameroon",
    longitude: 10.1516505,
    latitude: 5.9614117,
  };

  it("renders a leaflet map", () => {
    render(<Map place={place} />);
    expect(screen.getByRole("link", { name: "Leaflet" })).toBeInTheDocument();
  });
});
