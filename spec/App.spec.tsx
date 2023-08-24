import { render, screen } from "@testing-library/react";

import App from "app";

it("Проверка корневого компонента", () => {
  render(<App />);
  const headerText = screen.getByRole("heading", {
    name: "Main Page",
  });
  expect(headerText).toBeInTheDocument();
});
