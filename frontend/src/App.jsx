import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//routes
import Donorsignup from "./donor/Auth/Donorsignup";
import Login from "./donor/Auth/Login";
import Allusers from "./donor/Admin/allUsers";



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup/donor" element={<Donorsignup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/allusers" element={<Allusers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
