import { render, screen } from "@testing-library/react";
import { Badge } from "../badge";

describe("Badge", () => {
  it("should render badge with text", () => {
    render(<Badge>React</Badge>);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("should render with default variant", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toHaveClass("bg-card-border");
  });

  it("should render with teal variant", () => {
    render(<Badge variant="teal">Teal</Badge>);
    const badge = screen.getByText("Teal");
    expect(badge).toHaveClass("bg-teal-500/20");
  });

  it("should render with different sizes", () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    let badge = screen.getByText("Small");
    expect(badge).toHaveClass("text-xs");

    rerender(<Badge size="lg">Large</Badge>);
    badge = screen.getByText("Large");
    expect(badge).toHaveClass("text-base");
  });

  it("should apply interactive classes when interactive is true", () => {
    render(<Badge interactive>Interactive</Badge>);
    const badge = screen.getByText("Interactive");
    expect(badge).toHaveClass("cursor-pointer");
  });

  it("should apply active state when active and interactive are true", () => {
    render(
      <Badge interactive active>
        Active
      </Badge>
    );
    const badge = screen.getByText("Active");
    expect(badge).toHaveClass("bg-teal-500");
  });

  it("should apply custom className", () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const badge = screen.getByText("Custom");
    expect(badge).toHaveClass("custom-class");
  });
});
