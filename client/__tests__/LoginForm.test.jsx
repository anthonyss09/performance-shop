import React from "react";
import { afterEach, beforeEach, expect, test } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { screen, waitFor, fireEvent } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../src/utils/test-utils";
import Navbar from "../src/app/components/navbar/Navbar";
import LoginForm from "../src/app/components/LoginForm";

export const handlers = [
  http.post(
    `https://${process.env.NEXT_PUBLIC_SHOP_NAME}.myshopify.com/api/${process.env.NEXT_PUBLIC_VERSION}/graphql.json`,
    () => {
      console.log("query intercepted");

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
          customer: { id: `${process.env.NEXT_PUBLIC_TEST_CUSTOMER_ID}` },
          customerAccessTokenCreate: { customerAccessToken: "testToken" },
        },
      });
    }
  ),

  http.post(`${process.env.NEXT_PUBLIC_REDIS_URL}`, () => {
    console.log("intercepted redis query");
    return HttpResponse.json({ result: JSON.stringify({ cartId: "testId" }) });
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
      <LoginForm />
    </>
  );
  fireEvent.click(screen.getAllByText("login")[0]);

  await waitFor(() => {
    const alertP = screen.getByText("Welcome back!");
    expect(alertP).toBeDefined();
  });
});
