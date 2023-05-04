import { screen, render } from "@testing-library/react";
import Spinner from "../../components/Spinner";
import NotFound from "./NotFound";
test("loading", () => {
  render(
    <Spinner>
      <NotFound />
    </Spinner>
  );
});
