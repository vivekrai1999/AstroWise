import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Horoscope from "../Horoscope";

// import RadialMenu from "./RadialMenu";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Horoscope />}></Route>
        <Route path="/:sign" element={<Horoscope />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Button({ content }) {
  return <button>{content}</button>;
}

export default App;
