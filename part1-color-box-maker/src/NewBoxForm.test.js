import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import { render, fireEvent } from "@testing-library/react";

//smoke test
it("renders without crashing", function () {
  render(<NewBoxForm />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
