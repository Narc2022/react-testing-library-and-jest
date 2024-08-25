import { render, screen } from "@testing-library/react";
import App from "./App";
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("test inputbox", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  const checkInputPlace = screen.getByPlaceholderText(/Enter User Name/i);

  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlace).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("value", "Sachin Singh");
});
