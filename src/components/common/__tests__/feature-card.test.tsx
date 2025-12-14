import React from "react";
import { render, screen } from "@testing-library/react";
import { FeatureCard } from "../feature-card";

// Mock motion components to avoid animation complexity
jest.mock("motion/react-client", () => {
  return {
    __esModule: true,
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) =>
      React.createElement("div", props, children),
  };
});

describe("FeatureCard", () => {
  it("should render children content", () => {
    render(
      <FeatureCard>
        <h2>Test Title</h2>
        <p>Test content</p>
      </FeatureCard>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("should apply default variant styles", () => {
    const { container } = render(<FeatureCard>Content</FeatureCard>);
    const card = container.querySelector(".rounded-lg");
    expect(card).toHaveClass("bg-card-bg", "border", "border-card-border");
  });

  it("should apply elevated variant styles", () => {
    const { container } = render(
      <FeatureCard variant="elevated">Content</FeatureCard>
    );
    const card = container.querySelector(".rounded-lg");
    expect(card).toHaveClass("shadow-lg");
  });

  it("should apply flat variant styles", () => {
    const { container } = render(
      <FeatureCard variant="flat">Content</FeatureCard>
    );
    const card = container.querySelector(".rounded-lg");
    expect(card).toHaveClass("bg-card-border");
  });

  it("should apply custom className", () => {
    const { container } = render(
      <FeatureCard className="custom-class">Content</FeatureCard>
    );
    const card = container.querySelector(".rounded-lg");
    expect(card).toHaveClass("custom-class");
  });

  it("should disable animation when animationEnabled is false", () => {
    const { container } = render(
      <FeatureCard animationEnabled={false}>Content</FeatureCard>
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should apply hover styles when hover is true", () => {
    const { container } = render(<FeatureCard hover>Content</FeatureCard>);
    const card = container.querySelector(".rounded-lg");
    expect(card).toHaveClass("hover:border-teal-500/50");
  });
});
