import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HeaderImagesHome from "../src/app/components/headerImagesHome/HeaderImagesHome";
test("HeaderImagesHome", () => {
  render(<HeaderImagesHome />);

  const headerImagesWomanRunner = screen.getByRole(
    "header-images-woman-runner"
  );
  const headerImagesManDribbling = screen.getByRole(
    "header-images-man-dribbling"
  );
  const headerImagesManRunnerDark = screen.getByRole(
    "header-images-man-runner-dark"
  );
  const headerImagesManRunnerColor = screen.getByRole(
    "header-images-man-runner-color"
  );

  expect(headerImagesWomanRunner).toBeDefined();
  expect(headerImagesManDribbling).toBeDefined();
  expect(headerImagesManRunnerColor).toBeDefined();
  expect(headerImagesManRunnerDark).toBeDefined();
});
