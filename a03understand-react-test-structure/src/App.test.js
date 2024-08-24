import { render, screen } from "@testing-library/react";
import App from "./App";

test("text check", () => {
  render(<App />);
  const expText = screen.getByText(/code step by step/i);
  expect(expText).toBeInTheDocument();
});
