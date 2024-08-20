import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import FormRow from "../src/app/components/FormRow";

test("FormRow", () => {
  render(<FormRow />);
});
