import { render, screen } from "@testing-library/react";
import AddEditBlog from "./AddEditBlog";
import { MemoryRouter } from "react-router-dom";
test("not login", () => {
  render(
    <MemoryRouter>
      <AddEditBlog />
    </MemoryRouter>
  );
  const inputTitle = screen.getByPlaceholderText("Tiêu Đề");
  const tag = screen.getByPlaceholderText("Tags");
  const checkbox = screen.getAllByRole("radio");
  const content = screen.getByPlaceholderText("Nội Dung");
  const button = screen.getByRole("button");
  const options = screen.getAllByRole("option");
  expect(options.length).toEqual(11);
  expect(checkbox.length).toEqual(2);
  expect(tag).toBeInTheDocument();
  expect(inputTitle).toBeInTheDocument();
  expect(content).toBeInTheDocument();
  expect(button).toHaveTextContent("Đăng");
});
