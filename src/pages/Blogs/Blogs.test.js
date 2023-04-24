import { render, renderHook, screen } from "@testing-library/react";
import Blogs from "./Blogs";
import { MemoryRouter } from "react-router-dom";
import { useState } from "react";
test("not login", () => {
  render(
    <MemoryRouter>
      <Blogs setActive={"/blog"} />
    </MemoryRouter>
  );
  const details = screen.getAllByAltText("Chi Tiết");
  expect(details.length).toEqual(4);
});
