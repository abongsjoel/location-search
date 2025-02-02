import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./src/App";
import "@testing-library/jest-dom";

describe("App component", () => {
  it("renders LocationSearch component", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText(/Enter a location/i)
    ).toBeInTheDocument();
  });

  //   it("renders Map component", () => {
  //     render(<App />);
  //     expect(screen.getByTestId("map-component")).toBeInTheDocument();
  //   });
});
