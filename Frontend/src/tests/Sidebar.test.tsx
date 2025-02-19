import * as ReactTesting from "@testing-library/react";
const { render, screen } = ReactTesting;
import Sidebar from "../modules/Sidebar";
import { UserContext } from "../UserContext";

describe("Sidebar Component", () => {
  it("fetches and displays user details", async () => {
    const mockUser = {
      name: "John Doe",
      email: "john.doe@example.com",
    };

    render(
      <UserContext.Provider value={mockUser}>
        <Sidebar />
      </UserContext.Provider>
    );

    // Check if user details appear in the sidebar
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
  });

  it("renders sidebar with menu items", () => {
    render(
      <UserContext.Provider value={{ name: "Test User", email: "test@example.com" }}>
        <Sidebar />
      </UserContext.Provider>
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Analytics")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("All Posts")).toBeInTheDocument();
    expect(screen.getByText("Create Post")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});
