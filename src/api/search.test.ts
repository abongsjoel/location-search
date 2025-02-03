import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import { search } from "./search";
import { places, searchResponse } from "../constants";

import "@testing-library/jest-dom/vitest";

describe("Search", () => {
  beforeEach(() => {
    window.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetches and returns the location data", async () => {
    (window.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      json: async () => searchResponse,
    });

    const results = await search("Akum");

    expect(results).toEqual(places);
  });
});
