import React from "react";
import "./Front.css";
import {
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Example from "./Courosol/Example";
import Contact from "./Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";

const FrontPage = () => {
  return (
   <div className="courosol-container">
       <Example/>
       
  <Link to={'/portal/show'}>
  <Button sx={{ marginTop: "20px" }} variant="contained">
    <h1>SHOW MORE</h1>
  </Button>
  </Link>
  
         <div className="test-div">
         <Testimonial/>
         </div>
       <Contact/>
       <div>
       <Footer/>
      </div>
      </div>
  );
};

export default FrontPage;
{/* <div className="test-div">
  <h1>Our Happy Customer Reviews</h1><br></br>
         <h4>Check What They About Us</h4><br/>
        <Link to='/portal/testimonial'>
         <button className="btn-testimonial">Quick view ➡️</button>
         </Link>
         </div> */}