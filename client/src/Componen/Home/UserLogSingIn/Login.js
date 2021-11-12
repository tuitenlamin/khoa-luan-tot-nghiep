import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as login from "../../../ShareAll/Action/login";
import { Link } from "react-router-dom";
import Validator from '../../../utils/validator'
import LoginEmloyer from './Employer/loginEmloyer'
import ParticlesBg from "particles-bg";
const divIcon = {
  marginTop: "25px",
  marginRight: "14px",
};
const divA = {
  textDecoration: 'none'
}
const divButton = {
  margin: '0px 30px',
  backgroundColor: 'gold'
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: "",
      errors: {},
    };
    const requiredWith = (value, field, state) => (!state[field] && !value) || !!value;
    const rules = [
      {
        field: 'account',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
    ];
    this.validator = new Validator(rules);
  }
  //  user
  handleOnChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = (event) => {
    event.preventDefault();
    this.props.sigin(this.state, this.props.history);
  };
  // end user
  handleSubmit = (e) => {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    console.log(this.state);
  };
  render() {
    const {errors} = this.state;
    return (
      <div  id="Login" container>
        <Grid container>
         <Grid item xs={5} className="Login-Left text-center">
            <h1>ỨNG VIÊN</h1>
            <p>
              <DoneAllIcon /> 100.000+ CÔNG VIỆC MƠ ƯỚC
            </p>
            <p>
              <DoneAllIcon /> 365+ MẪU CV CHUYÊN NGHIỆP
            </p>
            <p>
              <DoneAllIcon /> 22+ BỘ ĐỀ CÂU HỎI TUYỂN DỤNG
            </p>
            <div className="Move-Page">
                <span>
                  <Link to="/resigter" style={divA}>
                    <Button variant="contained" style={divButton}>ĐĂNG KÍ ỨNG VIÊN</Button>
                  </Link>
                </span>
            </div>
            <form onSubmit={this.handleLogin}>
                <div className="divInput">
                  <AccountCircleIcon style={divIcon} />
                  <TextField
                    id="standard-basic"
                    label="Tài khoản"
                    onChange={this.handleOnChange}
                    name="account"
                    value={this.state.account}
                  />
                  {errors.account && <div className="validation" style={{display: 'block'}}>{errors.account}</div>}
                </div>
                <div className="divInput">
                  <VpnKeyIcon style={divIcon} />
                  <TextField
                    id="standard-basic"
                    label="Mật khẩu"
                    onChange={this.handleOnChange}
                    value={this.state.password}
                    name="password"
                    type="password"
                  />
                  {errors.password && <div className="validation" style={{display: 'block'}}>{errors.password}</div>}
                </div>
                <Button variant="contained" color="secondary" type="submit" onClick={this.handleSubmit}>
                  ĐĂNG NHẬP
                </Button>
              </form>
          </Grid>
          <Grid item xs={6} className="Login-Right text-center">
           <LoginEmloyer/>
           <ParticlesBg type="random" bg={true}/>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sigin: (user, history) => {
      dispatch(login.actLoginuser(user, history));
    },
    handleLoginEmloyer: (user, history) => {
      dispatch(login.actLoginEmployer(user, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
