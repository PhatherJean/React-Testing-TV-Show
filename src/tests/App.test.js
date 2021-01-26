import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

import { fetchShow as mockFetchShow } from "../api/fetchShow";

jest.mock("../api/fetchShow");

test("Render the app without any errors", () => {
  render(<App />);
});

test("Render fetchShow data when page load ", () => {
  mockFetchShow.mockResolvedValueOnce({
    data: [
      { name: "CasperJay", id: 0 },
      { name: "CasperSay", id: 1 },
      { name: "CasperPay", id: 2 },
      { name: "CasperDay", id: 3 },
    ],
  });
  //Arrange: render app to start
  render(<App />);

  const image = screen.queryAllByAltText(/stranger things/i);
  expect(image).toHaveClass("poster-img");
});
