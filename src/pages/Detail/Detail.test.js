import { render, screen } from "@testing-library/react";
import Detail from "./Detail";
import { MemoryRouter } from "react-router-dom";
import FeatureBlogs from "../../components/FeatureBlogs";
test("show detail of blog", () => {
  render(
    <MemoryRouter>
      <Detail />
    </MemoryRouter>
  );
});
