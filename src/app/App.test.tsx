import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import App from "./App.tsx";

test("renders the App component", () => {
  render(<App />);
  screen.getByText(/Account set up/i);
});
