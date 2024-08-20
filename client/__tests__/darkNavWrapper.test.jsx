import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import DarkNavWrapper from "../src/app/components/navbar/DarkNavWrapper";

test("DarkNavWrapper", () => {
  render(
    <StoreProvider>
      <DarkNavWrapper />
    </StoreProvider>
  );
});
