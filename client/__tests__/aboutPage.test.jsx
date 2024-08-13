import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutPage from "../src/app/about/page";

test("AboutPage", () => {
  render(<AboutPage />);

  const aboutImageSneaker = screen.getByRole("about-image-sneaker");
  const aboutImageManRunnerDark = screen.getByRole(
    "about-image-man-runner-dark"
  );
  const aboutImageManDribbling = screen.getByRole("about-image-man-dribbling");
  const aboutImageSneakerSmall = screen.getByRole("about-image-sneaker-small");
  const aboutImageWomanRunner = screen.getByRole("about-image-woman-runner");

  expect(aboutImageSneaker).toBeDefined();
  expect(aboutImageManRunnerDark).toBeDefined();
  expect(aboutImageManDribbling).toBeDefined();
  expect(aboutImageSneakerSmall).toBeDefined();
  expect(aboutImageWomanRunner).toBeDefined();
});
