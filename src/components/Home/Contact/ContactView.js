import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ContactView.css";
import { Button } from "@mui/material";

const ContactView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [isloading, setLoading] = useState(false);
  useEffect(() => {  
    loadStudent();
  }, []);
  const loadStudent = async () => {
    // setLoading(true)
    let user = await axios.get(
      "https://backend-server-project.onrender.com/users"
    );

    console.log(user);
    setUser(user.data);
    // setLoading(false)
  };
  

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>SL.NO</th>
            <th>NAME</th>
            <th>PH_NO</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>MESSAGE</th>
          </tr>
        </thead>
        <tbody>
          {user.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.phno}</td>
                <td> {value.email}</td>
                <td>{value.address}</td>
                <td>{value.msg}</td>
                <td>
               
                  <Button >Get User</Button>
                 
                  <Button>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactView;
