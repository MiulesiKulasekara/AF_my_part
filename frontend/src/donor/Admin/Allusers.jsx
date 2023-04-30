import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";

const Allusers = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-container-allusers">
      <Table responsive="md" className="tbl">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Location</th>
            <th>Phone 1</th>
            <th>Phone 2</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>1</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })} */}
        </tbody>
      </Table>
    </div>
  );
};
export default Allusers;
