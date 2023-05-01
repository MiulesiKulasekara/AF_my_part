import "./style.css"; 
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";

const Alldonors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/donors")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-container-alldonors">
      <Table responsive="md" className="tbl-alldonors">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Location</th>
            <th>Phone 1</th>
            <th>Phone 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((donor, index) => {
            return (
              <tr key={index}>
                <td>{donor._id}</td>
                <td>{donor.name}</td>
                <td>{donor.email}</td>
                <td>{donor.address}</td>
                <td>{donor.location}</td>
                <td>{donor.tele.phonea}</td>
                <td>{donor.tele.phoneb}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Alldonors;
