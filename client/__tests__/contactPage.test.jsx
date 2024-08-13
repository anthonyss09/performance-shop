import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "../src/app/contact/page";

test("ContactPage", () => {
  render(<ContactPage />);

  const contactForm = screen.getByRole("contact-form");
  const contactFormInput = screen.getByRole("contact-form-input");
  const contactFormTextarea = screen.getByRole("contact-form-textarea");
  const contactFormBtn = screen.getByRole("contact-form-btn");

  expect(contactForm).toBeDefined();
  expect(contactFormInput).toBeDefined();
  expect(contactFormTextarea).toBeDefined();
  expect(contactFormBtn).toBeDefined();
});
