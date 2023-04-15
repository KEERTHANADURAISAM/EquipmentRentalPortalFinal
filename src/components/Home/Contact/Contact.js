import React from 'react'
import './Contact.css'
import {
    Button,
    Grid,
    Paper,
    Typography,
  } from "@mui/material";
import axios from 'axios';
import { useFormik } from 'formik';

const Contact = () => {
    let formik = useFormik({
        initialValues: {
          name: "",
          phno: "",
          email: "",
          address:"",
          msg:"",
        },
        validate: (values) => {
          let errors = {};
          if (values.name === "") {
            errors.name = "please enter a name";
          }
          if (values.email === "") {
            errors.email = "please enter a  E-mail";
          }
          if (values.phno === "") {
            errors.phno = "please enter a Ph_no";
          }
         if (values.address === "") {
            errors.address = "please enter a address";
          }
          if (values.msg === "") {
            errors.msg = "please enter a Message";
          }
         
    
          return errors;
        },
        onSubmit:async (values) => {
          let contact=await axios.post("https://backend-server-project.onrender.com/createuser",values)
       alert("successfully message send ")
    
        },
      });
  return (
    <div>
    <Grid>
      <Paper elevation={10} className="card">
        <Grid align="center">
        <h3>GET IN TOUCH</h3>
        <br></br>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
        <Typography className="btn">
        <input
                    type={"text"}
                    className="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    placeholder='your name'
                  ></input>
                   <br></br>
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                  <br></br>
        </Typography>
        <Typography>
        <input
                    type={"email"}
                    className="text"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    placeholder='your email'
                  ></input>
                   <br></br>
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                  <br></br>
        </Typography>
        <br></br>
        <Typography>
        <input
                    type={"text"}
                    className="text"
                    value={formik.values.phno}
                    onChange={formik.handleChange}
                    name="phno"
                    placeholder='your ph_No'
                  ></input>
                   <br></br>
                  <span style={{ color: "red",textAlign:'left' }}>{formik.errors.phno}</span>
                  <br></br>
        </Typography>
        <br></br>
        <Typography>
        <input
                    type={"text"}
                    className="text"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    name="address"
                    placeholder='your Address'
                  ></input>
                   <br></br>
                  <span style={{ color: "red" }}>{formik.errors.address}</span>
                  <br></br>
        </Typography><br></br>
        <Typography>
        <input
                    type={"text"}
                    className="text"
                    value={formik.values.msg}
                    onChange={formik.handleChange}
                    name="msg"
                    placeholder='your Message'
                  ></input>
                   <br></br>
                  <span style={{ color: "red" }}>{formik.errors.msg}</span>
                  <br></br>
        </Typography><br></br>
       <Button variant="contained"
       
         className="btn"
         type="submit"
         value="submit"
         disabled={!formik.isValid}><h1>SEND MESSAGE</h1></Button>
         </form>
      </Paper>
    </Grid>
  </div>
  )
}

export default Contact



