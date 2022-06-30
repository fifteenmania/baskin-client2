import { BrowserRouter } from "react-router-dom";
import Main from "./feature/main/Main";

export default function App() {
  return <BrowserRouter basename="/baskin-client2">
    <Main/>
  </BrowserRouter>
}
