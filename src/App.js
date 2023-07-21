import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import NoPage from "../src/pages/NoPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}
