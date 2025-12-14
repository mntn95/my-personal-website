import React from "react";
import { render, screen } from "@testing-library/react";
import { SectionHeader } from "../section-header";

// Mock motion components to avoid animation complexity
jest.mock("motion/react-client", () => {
  return {
    __esModule: true,
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
      React.createElement("div", props, children),
  };
});

describe("SectionHeader", () => {
  it("should render title and description", () => {
    render(<SectionHeader title="Test Title" description="Test description" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = render(
      <SectionHeader
        title="Test Title"
        description="Test description"
        className="custom-class"
      />
    );
    const header = container.firstChild;
    expect(header).toHaveClass("custom-class");
  });

  it("should apply custom titleClassName", () => {
    render(
      <SectionHeader
        title="Test Title"
        description="Test description"
        titleClassName="custom-title-class"
      />
    );
    const title = screen.getByText("Test Title");
    expect(title).toHaveClass("custom-title-class");
  });

  it("should apply custom descriptionClassName", () => {
    render(
      <SectionHeader
        title="Test Title"
        description="Test description"
        descriptionClassName="custom-desc-class"
      />
    );
    const description = screen.getByText("Test description");
    expect(description).toHaveClass("custom-desc-class");
  });
});
