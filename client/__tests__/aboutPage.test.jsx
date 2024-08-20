import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "../src/app/about/page";

test("AboutPage", () => {
  render(<AboutPage />);
});
