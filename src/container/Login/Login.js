import React, { Fragment } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import "./Login.css";
import { services } from "../../Services/login.service";
// let errorMsg ="" ;
class Login extends React.Component {
  state = {
    userId: "",
    password: "",
    errorMsg:""
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
    console.log(this.state.userId, this.state.password);
  };
  handleSubmit(userId, password) {
    let response = services.loginAuthentication(userId, password);
    console.log("..", response);
    if (response === "Login Failed"){
      this.setState({
        errorMsg : "Login Failed Please Try again..."
      });
    }else{
      this.setState({
        errorMsg : ""
      });

    }
      // msg = services.loginAuthentication(userId, password);
      // console.log("..", msg);
  }
  render() {
    return (
      <Fragment>
        <Grid
          className="login"
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item lg={4}>
            <Card className="card" align="center">
              <CardContent>
                <Typography variant="display3" gutterBottom>
                  App Login
                </Typography>
                <TextField
                  id="userId"
                  label="UserID"
                  fullWidth={true}
                  value={this.state.userId}
                  onChange={this.handleChange("userId")}
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth= {true}
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    this.handleSubmit(this.state.userId, this.state.password)
                  }
                >
                  Login
                </Button>
                &nbsp;
                <Typography className="errorMsg" variant="caption">{this.state.errorMsg}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default Login;
