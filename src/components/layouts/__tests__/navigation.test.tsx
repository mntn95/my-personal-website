import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navigation } from "../navigation";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      "Navigation.home": "Home",
      "Navigation.aboutMe": "About Me",
      "Navigation.education": "Education",
      "Navigation.projects": "Projects",
      "Navigation.services": "Services",
      "Navigation.contact": "Contact",
    };
    return translations[key] || key;
  },
}));

describe("Navigation", () => {
  it("should render navigation header", () => {
    render(<Navigation />);
    const logo = screen.getByText("MN.");
    expect(logo).toBeInTheDocument();
  });

  it("should render mobile menu button", () => {
    render(<Navigation />);
    const menuButton = screen.getByLabelText("Menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("should toggle mobile menu when button is clicked", async () => {
    const user = userEvent.setup();
    render(<Navigation />);
    const menuButton = screen.getByLabelText("Menu");

    await user.click(menuButton);
    // Menu should be visible (translate-x-0 class applied)
    const mobileMenu = document.querySelector(".translate-x-0");
    expect(mobileMenu).toBeInTheDocument();
  });
});
