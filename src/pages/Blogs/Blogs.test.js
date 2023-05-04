import { render, renderHook, screen } from "@testing-library/react";
import Blogs from "./Blogs";
import { MemoryRouter } from "react-router-dom";
import { useState } from "react";
test("show blogs", () => {
  render(
    <MemoryRouter>
      <Blogs setActive={"/blog"} />
    </MemoryRouter>
  );
});
