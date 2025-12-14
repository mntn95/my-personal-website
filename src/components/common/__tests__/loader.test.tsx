import { render } from "@testing-library/react";
import { Loader } from "../loader";

describe("Loader", () => {
  it("should not render when isVisible is false", () => {
    const { container } = render(<Loader isVisible={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("should render when isVisible is true", () => {
    render(<Loader isVisible={true} />);
    const loader = document.querySelector(".loader-overlay");
    expect(loader).toBeInTheDocument();
  });
});
