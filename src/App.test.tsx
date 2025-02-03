import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "./App";

import "@testing-library/jest-dom/vitest";

describe("App component", () => {
  it("renders LocationSearch component", () => {
    render(<App />);
    expect(screen.getByTestId("location-search")).toBeInTheDocument();
  });

  it("renders Map component", () => {
    render(<App />);
    expect(screen.getByText("Leaflet")).toBeInTheDocument();
  });
});
