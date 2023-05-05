import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//routes
import Donorsignup from "./Auth/Donorsignup";
import Login from "./Auth/Login";
import Alldonors from "./admin/Alldonors";
import Createdonations from "./donations/Createdonations";
import DonorProfile from "./Profile/DonorProfile";
import DonationItem from "./Profile/DonationItem";
import DonorProfileTopBar from "./Profile/DonorProfileTopBar";
import DonorProfileSideBar from "./Profile/DonorProfileSideBar";
import DonorEditProfile from "./Profile/DonorEditProfile";

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
          <Route path="/donor/myprofile" element={<DonorProfile />} />
          <Route path="/donor/donations" element={<DonationItem />} />
          <Route path="/donor/donorprofiletopbar" element={<DonorProfileTopBar />} />
          <Route path="/donor/donorprofilesidebar" element={<DonorProfileSideBar />} />
          <Route path="/donor/edit/myprofile" element={<DonorEditProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
