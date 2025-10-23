import { test } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import App from "./App.tsx";

test("renders the App component", () => {
  render(<App />);
  // screen.debug();
});
