import { withProviders } from "./providers";
import "./index.css";
import { Routing } from "pages";

function App() {
  return (
    <div className="app">
      <Routing />
    </div>
  );
}

export default withProviders(App);
