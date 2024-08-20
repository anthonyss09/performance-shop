import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import LightNavWrapper from "../src/app/components/navbar/LightNavWraper";

test("LightNavWrapper", () => {
  render(
    <StoreProvider>
      <LightNavWrapper />
    </StoreProvider>
  );
});
