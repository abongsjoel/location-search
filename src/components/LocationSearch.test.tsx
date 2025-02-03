import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import LocationSearch from "./LocationSearch";
import { search } from "../api/search.ts";
import "@testing-library/jest-dom/vitest";
import { places } from "../constants/index.ts";

const mocks = vi.hoisted(() => {
  return {
    search: vi.fn(),
  };
});

vi.mock("../api/search.ts", () => {
  return {
    search: mocks.search,
  };
});

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

  it("get location list when user enters a location", async () => {
    vi.mocked(search).mockResolvedValue(places);

    const input = screen.getByRole("textbox", { name: /search location/i });
    const button = screen.getByRole("button", { name: /search/i });

    await userEvent.type(input, "Akum");
    await userEvent.click(button);

    expect(screen.getAllByRole("button", { name: /go/i })).toHaveLength(
      places.length
    );

    places.forEach((place) => {
      expect(screen.getByText(place.name)).toBeInTheDocument();
    });
  });

  it("call onPlaceClick when user clicks on 'Go' button", async () => {
    vi.mocked(search).mockResolvedValue(places);

    const input = screen.getByRole("textbox", { name: /search location/i });
    const button = screen.getByRole("button", { name: /search/i });

    await userEvent.type(input, "Akum");
    await userEvent.click(button);

    const goButtons = screen.getAllByRole("button", { name: /go/i });

    await userEvent.click(goButtons[0]);

    expect(onPlaceClick).toHaveBeenCalledWith(places[0]);
  });
});
