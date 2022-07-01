import { HashRouter } from "react-router-dom";
import Main from "./feature/main/Main";

export default function App() {
  return <HashRouter basename="/baskin-client2">
    <Main/>
  </HashRouter>
}
