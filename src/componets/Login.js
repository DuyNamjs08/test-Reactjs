import React from "react";  
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function Login() {
  const paperStyle = {
    padding : '15px' ,
    height: "80vh",
    width: 320,
    margin: " 20px auto",
  };
  const styleAvatar = { background: "#5e92c3" , marginTop:20     };
  const styleInput = {marginTop : 10}
  const styleInputml = { marginLeft : 10};
  const styleFontBtn = { fontSize: 16, textTransform: "capitalize" };
  return (
    <Grid style={paperStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={styleAvatar}>
            <AccountCircleOutlinedIcon />
          </Avatar>
          <h2> Sign In</h2>
        </Grid>

        <TextField
          id="outlined-basic"
          fullWidth
          required
          label="UserName"
          variant="outlined"
        />
        <TextField
          style={styleInput}
          id="outlined-basic"
          fullWidth
          required
          label="Password"
          variant="outlined"
          type="password"
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remmember password"
          style={styleInput}
        />

        <Button
          style={styleFontBtn}
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
        >
          Sign in
        </Button>
        <Typography style={styleInput}>
          <Link href="#">Forgot Password</Link>
        </Typography>
        <Typography style={styleInput}>
          Do you have any acount ?
          <Link style={styleInputml} href="#">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
