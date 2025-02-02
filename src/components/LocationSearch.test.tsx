import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LocationSearch from "./LocationSearch";
import "@testing-library/jest-dom/vitest";

describe("LocationSearch component", () => {
  const onPlaceClick = vi.fn();
  render(<LocationSearch onPlaceClick={onPlaceClick} />);

  it("renders titles", () => {
    expect(screen.getByText(/Search location/i)).toBeInTheDocument();
    expect(screen.getByText(/Locations Found/i)).toBeInTheDocument();
  });

  it("renders search input and button", () => {
    expect(
      screen.getByPlaceholderText(/Enter a location/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("renders search button", () => {});
});
