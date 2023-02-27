import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};
describe("FollowerList", () => {
  test("should fetch and render folowwer element", async () => {
    render(<MockFollowersList />);
    const followerItem = await screen.findByTestId(/follower-item-0/i);
    expect(followerItem).toBeInTheDocument();
  });

  test("should render multiple followers items", async () => {
    render(<MockFollowersList />);
    const followerItems = await screen.findAllByTestId(/follower-item/i);
    expect(followerItems.length).toBe(1);
  });
});
