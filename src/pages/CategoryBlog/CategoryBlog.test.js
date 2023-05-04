import { render, screen } from "@testing-library/react";
import CategoryBlog from "./CategoryBlog";
import { MemoryRouter } from "react-router-dom";
test("show categories blog", () => {
  render(
    <MemoryRouter>
      <CategoryBlog />
    </MemoryRouter>
  );
  const title = screen.getByText("Danh Mục");
  expect(title).toBeInTheDocument(/Danh Mục/i);
});
