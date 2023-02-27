import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addtask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new Task.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  test("should be able to type in input", () => {
    render(<MockTodo />);
    addtask(["go to Zenika Paris"]);
    const divElement = screen.getByText(/go to Zenika Paris/i);
    expect(divElement).toBeInTheDocument();
  });
  test("should render multiple items", () => {
    render(<MockTodo />);
    addtask(["go to Zenika Paris", "go to Zenika Lille", "go to Zenika Brest"]);
    const divElement = screen.getAllByTestId(/todo-list/i);
    expect(divElement.length).toBe(3);
  });
  test("task should not have complete class when initally rendered", () => {
    render(<MockTodo />);
    addtask(["go to Zenika Paris"]);
    const divElement = screen.getByText(/go to Zenika Paris/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("task should have complete class when clicked", () => {
    render(<MockTodo />);
    addtask(["go to Zenika Paris"]);
    const divElement = screen.getByText(/go to Zenika Paris/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
