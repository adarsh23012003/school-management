import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import NoPage from "../src/pages/NoPage";
import Student from "../src/pages/Student";
import StudentDetails from "../src/pages/StudentDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/student' element={<Student />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/student/:studentId' element={<StudentDetails />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </>
  );
}
