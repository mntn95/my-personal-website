import React from "react";
import { render, screen } from "@testing-library/react";
import { PageHeader } from "../page-header";

// Mock motion components to avoid animation complexity
jest.mock("motion/react-client", () => {
  return {
    __esModule: true,
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
      React.createElement("div", props, children),
  };
});

describe("PageHeader", () => {
  it("should render title and description", () => {
    render(<PageHeader title="Test Title" description="Test description" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("should render badge when badge prop is provided", () => {
    render(
      <PageHeader
        badge="About Me"
        title="Test Title"
        description="Test description"
      />
    );
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("should not render badge when badge prop is not provided", () => {
    render(<PageHeader title="Test Title" description="Test description" />);
    expect(screen.queryByText("About Me")).not.toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = render(
      <PageHeader
        title="Test Title"
        description="Test description"
        className="custom-class"
      />
    );
    const header = container.firstChild;
    expect(header).toHaveClass("custom-class");
  });
});
