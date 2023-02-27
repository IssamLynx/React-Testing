import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import TodoFooter from "../TodoFooter";
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("TodoFooter", () => {
  test("should render the correct number of incomplet tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const pElement = screen.getByText(/2 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });

  test('should render "task" when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });
});
