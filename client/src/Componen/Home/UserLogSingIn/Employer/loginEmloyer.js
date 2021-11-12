import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import Validator from '../../../../utils/validator';
import { connect } from "react-redux";
import * as login from "../../../../ShareAll/Action/login";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

class LoginEmloyer extends Component {
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
    //employer
    handleLoginEmloyer = (event) => {
        event.preventDefault();
        this.props.siginEmloyer(this.state, this.props.history);
    };
    handleOnChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };
    //end emloyer
    handleSubmit = (e) => {
    this.setState({
        errors: this.validator.validate(this.state),
    });
    console.log(this.state);
    };
    render() {
        const {errors} = this.state;
        return (
            <Container className="main" component="main" maxWidth="xs">
                  <CssBaseline />
                  <h1>NHÀ TUYỂN DỤNG</h1>        
                  <div item xs={7} >
                  <p>
                    <DoneAllIcon /> Đăng tin tuyển dụng miễn phí
                  </p>
                  <p>
                    <DoneAllIcon /> Đăng tin không giới hạn
                  </p>
                  <p>
                    <DoneAllIcon /> Biểu mẫu nhân sự chuyên nghiệp
                  </p>
                  <div className="Move-Page">
                      <span>
                        <Link to="/resigter-employment" style={divA}>
                          <Button variant="contained" style={divButton}>ĐĂNG KÍ NHÀ TUYỂN DỤNG</Button>
                        </Link>
                      </span>
                  </div>
                  </div>
                  <div className="Right-content">
                  <form onSubmit={this.handleLoginEmloyer}>
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
                </div>
            </Container>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        siginEmloyer: (user, history) => {
        dispatch(login.actLoginEmployer(user, history));
      },
    };
  };
export default connect(null, mapDispatchToProps)(LoginEmloyer);
