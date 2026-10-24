import { render } from "@testing-library/react";
import App from "./App";

test("renders the application", () => {
const { container } = render(<App />);
expect(container.firstChild).not.toBeNull();
});
