import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//routes
import Signup from "./donor/Auth/Signup";
import Login from "./donor/Auth/Login";
import Allusers from "./donor/Admin/allUsers";



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup/donor" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/allusers" element={<Allusers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
