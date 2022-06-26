import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link
} from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function SignUp() {
  const stylePaper = {
    width: 320,
    height: "90vh",
    margin: "0 auto",
    marginTop: "20px",
    padding: 15,
  };
  const styleAvatar = { background: "#2d94b1" };
  const styleInputmr = { marginTop: 12 };
  const styleIcon = {fontSize:25}
  const styleBtn = {
    textTransform: "capitalize",
    fontSize: 18,
    background: "#2d94b1",
  };
  const stylemrl ={marginLeft:10}
  const styleIconColor = { color: "#2d94b1" };
//   const termAndCondition ={}
  return (
    <Grid>
      <Paper elevation={10} style={stylePaper}>
        <Grid align="center">
          <Avatar style={styleAvatar}>
            <AccountCircleOutlinedIcon />
          </Avatar>
          <h2> Sing Up </h2>
        </Grid>

        <TextField
          style={styleInputmr}
          id="input-with-icon-textfield"
          label="UserName"
          variant="outlined"
          type="text"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle style={(styleIcon, styleIconColor)} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          style={styleInputmr}
          id="input-with-icon-textfield"
          label="Email"
          variant="outlined"
          type="text"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon style={(styleIcon, styleIconColor)} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          style={styleInputmr}
          id="input-with-icon-textfield"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon style={(styleIcon, styleIconColor)} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          style={styleInputmr}
          id="input-with-icon-textfield"
          label="UserName"
          type="password"
          variant="outlined"
          fullWidth
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenOutlinedIcon style={(styleIcon, styleIconColor)} />
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          style={styleInputmr}
          control={<Checkbox fullWidth name="checkedB" color="primary" />}
          label={`I read and agree to Term&Condition`}
        />
        <Button
          align="center"
          variant="contained"
          color="primary"
          fullWidth
          style={styleBtn}
        >
          Creacte Acount
        </Button>
        <Typography align="center" style={styleInputmr}>
          Already have a count
          <Link style={stylemrl} href="#">
            Login
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default SignUp;
