import { render, screen } from "@testing-library/react";
import { Alert } from "../alert";

describe("Alert", () => {
  it("should render alert with children content", () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByText("Alert message")).toBeInTheDocument();
  });

  it("should render with info variant by default", () => {
    const { container } = render(<Alert>Info message</Alert>);
    const alert = container.querySelector(".rounded-lg");
    expect(alert).toHaveClass("bg-blue-500/10");
  });

  it("should render with success variant", () => {
    const { container } = render(
      <Alert variant="success">Success message</Alert>
    );
    const alert = container.querySelector(".rounded-lg");
    expect(alert).toHaveClass("bg-teal-500/10");
  });

  it("should render with error variant", () => {
    const { container } = render(<Alert variant="error">Error message</Alert>);
    const alert = container.querySelector(".rounded-lg");
    expect(alert).toHaveClass("bg-red-500/10");
  });

  it("should render with warning variant", () => {
    const { container } = render(
      <Alert variant="warning">Warning message</Alert>
    );
    const alert = container.querySelector(".rounded-lg");
    expect(alert).toHaveClass("bg-yellow-500/10");
  });

  it("should render with title when title prop is provided", () => {
    render(<Alert title="Alert Title">Alert message</Alert>);
    expect(screen.getByText("Alert Title")).toBeInTheDocument();
    expect(screen.getByText("Alert message")).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = render(
      <Alert className="custom-class">Message</Alert>
    );
    const alert = container.querySelector(".rounded-lg");
    expect(alert).toHaveClass("custom-class");
  });
});
