// __tests__/Home.test.jsx
import { render, screen } from "@testing-library/react";
import Home from "../app/page"; // adjust the path if needed
import "@testing-library/jest-dom";

describe("Home Component", () => {
  it("renders Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("/next.svg"));
  });

  it("renders getting started instructions", () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Save and see your changes instantly test/i)
    ).toBeInTheDocument();
  });

  it("renders Deploy now link with Vercel logo", () => {
    render(<Home />);
    const deployLink = screen.getByRole("link", { name: /Deploy now/i });
    expect(deployLink).toBeInTheDocument();
    expect(deployLink).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com")
    );
    const vercelLogo = screen.getByAltText("Vercel logomark");
    expect(vercelLogo).toBeInTheDocument();
  });

  it("renders Read our docs link", () => {
    render(<Home />);
    const docsLink = screen.getByRole("link", { name: /Read our docs/i });
    expect(docsLink).toBeInTheDocument();
    expect(docsLink).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs")
    );
  });

  it("renders footer links", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /Learn/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Examples/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Go to nextjs.org/i })
    ).toBeInTheDocument();
  });
});
