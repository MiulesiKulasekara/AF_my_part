import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//routes
import Donorsignup from "./Auth/Donorsignup";
import Login from "./Auth/Login";
import Alldonors from "./admin/Alldonors";
import Createdonations from "./Profile/Createdonations";
import DonationItem from "./Profile/DonationItem";
import DonorProfileTopBar from "./Profile/DonorProfileTopBar";
import DonorProfileSideBar from "./Profile/DonorProfileSideBar";
import DonorProfileEditForm from "./Profile/DonorProfileEditForm";


import DonorProfile from "./Profile/DonorProfile";
import DonorEditProfile from "./Profile/DonorEditProfile";
import DonorAddDonations from "./Profile/DonorAddDonations"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/donor/signup" element={<Donorsignup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/admin/alldonors" element={<Alldonors />} />
          <Route path="/donor/create/donations" element={<Createdonations />} />
          <Route path="/donor/donation/item" element={<DonationItem />} />
          <Route path="/donor/donorprofiletopbar" element={<DonorProfileTopBar />} />
          <Route path="/donor/donorprofilesidebar" element={<DonorProfileSideBar />} />
          <Route path="/donor/edit/form" element={<DonorProfileEditForm />} /> 

          <Route path="/donor/myprofile" element={<DonorProfile />} />
          <Route path="/donor/edit/myprofile" element={<DonorEditProfile />} />
          <Route path="/donor/add/donations" element={<DonorAddDonations />} /> 
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
