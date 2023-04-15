import {
    Avatar,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Paper,
    Typography,
  } from "@mui/material";
  import React from "react";
  import "./Login.css";
  import LockIcon from "@mui/icons-material/Lock";
  import { Link, useNavigate } from "react-router-dom";
  
  const Login = () => {
    const navigate=useNavigate()
    return (
      <div>
        <Grid>
          <Paper elevation={10} className="paper-style">
            <Grid align="center">
              <Avatar className="avatar">
                <LockIcon />
              </Avatar>
              <br></br>
              <h2> Sign in</h2>
              <br></br><br></br>
            </Grid>
  
            <Typography>
              <input type="text" placeholder="Email" className="text-type" />
            </Typography>
            <br></br>
            <Typography>
              <input type="password" placeholder="Password" className="text-type" />
            </Typography>
            <br></br>
            <FormControlLabel
              control={<Checkbox name="checked" color="primary" />}
              label="Remember me"
            />
            <Link to={"/portal/home"}>
              <Button
                color="primary"
                type="submit"
                fullWidth
                variant="contained"
                className="btn"
              >
                Sign In
              </Button><br></br><br></br>
            </Link>
          <span>Admin Login</span><br></br><br></br>
            <Button variant="contained" onClick={()=>navigate('/admin')} className="btn-one">
            Admin
            </Button>
            
        
            
          </Paper>
        </Grid>
      </div>
    );
  };
  
  export default Login;
  