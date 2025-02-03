import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";
import "@testing-library/jest-dom/vitest";

describe("App component", () => {
  render(<App />);
  it("renders LocationSearch component", () => {
    expect(screen.getByTestId("location-search")).toBeInTheDocument();
  });

  it("renders Map component", () => {
    expect(screen.getByText("Leaflet")).toBeInTheDocument();
  });
});
