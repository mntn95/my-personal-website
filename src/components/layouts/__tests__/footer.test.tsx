import { render, screen } from "@testing-library/react";
import { Footer } from "../footer";

// Mock next-intl
jest.mock("next-intl/server", () => ({
  getTranslations: async () => (key: string) => {
    const translations: Record<string, string> = {
      "Footer.description": "Portfolio description",
      "Footer.connectWithMe": "Connect with me",
      "Footer.copyright": "© 2024 All rights reserved",
    };
    return translations[key] || key;
  },
}));

describe("Footer", () => {
  it("should render footer with logo", async () => {
    const FooterComponent = await Footer();
    render(FooterComponent);
    const logo = screen.getByText("MN.");
    expect(logo).toBeInTheDocument();
  });

  it("should render footer element", async () => {
    const FooterComponent = await Footer();
    const { container } = render(FooterComponent);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
