import React from "react";
import { afterEach, beforeEach, expect, test } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../src/utils/test-utils";
import ContactPage from "../src/app/contact/page";
import Navbar from "../src/app/components/navbar/Navbar";

export const handlers = [
  http.post(
    `https://${process.env.NEXT_PUBLIC_SHOP_NAME}.myshopify.com/api/${process.env.NEXT_PUBLIC_VERSION}/graphql.json`,
    () => {
      console.log("query intercepted");
      // const { cartCount, cartId } = useAppSelector((state) => state.cart);
      return HttpResponse.json({
        data: {
          cart: {
            lines: {
              edges: [
                {
                  node: {
                    attributes: [
                      { key: "title", value: "test" },
                      { key: "variantTitle", value: "testVariantTitle" },
                      { key: "imageUrl", value: {} },
                    ],
                    id: "",
                    merchandise: { id: "" },
                    quantity: 10,
                  },
                },
              ],
            },
          },
          customer: null,
        },
      });
    }
  ),
  http.post("/api/contact", () => {
    console.log("intercepted  contact query");
    return HttpResponse.json({ response: { ok: true } });
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeEach(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterEach(() => server.close());

test("graphql client returns data and component renders data", async () => {
  renderWithProviders(
    <>
      <Navbar />
      <ContactPage />
    </>
  );
  const email = screen.getByLabelText("Email");
  const message = screen.getByLabelText("Message:");

  fireEvent.change(email, {
    target: { id: "email", value: "tesgmai" },
  });
  fireEvent.change(message, {
    target: { id: "message", value: "test message" },
  });
  fireEvent.click(screen.getByText("Send"));

  await waitFor(() => {
    const alertP = screen.getByText("Please provide a valid email.");
    expect(alertP).toBeDefined();
  });
});
