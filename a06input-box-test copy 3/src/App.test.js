import { render, screen } from "@testing-library/react";
import App from "./App";

test("Testing InputBox", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  const checkInputPlaceHolder = screen.getByPlaceholderText(/Enter User Name/i);

  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
});
