import { render, screen } from "@testing-library/react";
import About from "./About";
test("renders members", () => {
  render(<About />);
  const listItem = screen.getAllByRole("listitem");
  expect(listItem.length).toEqual(5);
});
test("link member profiles", () => {
  render(<About />);
  const listLink = screen.getAllByRole("link");
  expect(listLink.length).toEqual(5);
});
