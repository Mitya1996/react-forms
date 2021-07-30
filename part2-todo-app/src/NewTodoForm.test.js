import NewTodoForm from "./NewTodoForm";
import { render, fireEvent } from "@testing-library/react";

//smoke test
it("renders without crashing", function () {
  render(<NewTodoForm />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
