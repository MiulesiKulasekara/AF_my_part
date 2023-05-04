import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//routes
import Donorsignup from "./donor/Auth/Donorsignup";
import Login from "./donor/Auth/Login";
import Alldonors from "./donor/Admin/Alldonors";
import Createdonations from "./donations/Createdonations";
import DonorProfileBar from "./donor/Profile/DonorProfileBar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/donor/signup" element={<Donorsignup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin/alldonors" element={<Alldonors />} />
          <Route path="/donor/create/donations" element={<Createdonations />} />
          <Route path="/donor/myprofile" element={<DonorProfileBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
