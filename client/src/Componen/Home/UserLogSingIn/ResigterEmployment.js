import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as Action from "../../../ShareAll/Action/company";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Validator from "../../../utils/validator";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LanguageIcon from '@material-ui/icons/Language';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BusinessIcon from '@material-ui/icons/Business';
import NatureIcon from '@material-ui/icons/Nature';
import ParticlesBg from "particles-bg";
const divStyle = {
  marginLeft: "170px",
};
const divIcon = {
  marginTop: "25px",
  marginRight: "14px",
};
class ResigterEmployment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      nation: "",
      website: "",
      email: "",
      numberPhone: "",
      name: "",
      password: "",
      account: "",
      errors: {},
      company: "",
    };
    const rules = [
      {
        field: "address",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống.",
      },
      {
        field: "address",
        method: "isLength",
        args: [{ min: 5 }],
        validWhen: true,
        message: "Bắt buộc phải từ 5 kí tự.",
      },
      {
        field: "nation",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống.",
      },
      {
        field: "nation",
        method: "isLength",
        args: [{ min: 5 }],
        validWhen: true,
        message: "Bắt buộc phải từ 5 kí tự.",
      },
      {
        field: "webstie",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống.",
      },
      {
        field: "webstie",
        method: "isLength",
        args: [{ min: 5 }],
        validWhen: true,
        message: "Bắt buộc phải từ 5 kí tự.",
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "Định dạng email @gmail .",
      },
      {
        field: "address",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống.",
      },
      {
        field: "name",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống.",
      },
      {
        field: "name",
        method: "isLength",
        args: [{ min: 5 }],
        validWhen: true,
        message: "Bắt buộc phải từ 5 kí tự.",
      },
      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống.",
      },
      {
        field: "password",
        method: "isLength",
        args: [{ min: 5 }],
        validWhen: true,
        message: "Bắt buộc phải từ 5 kí tự.",
      },
      {
        field: "numberPhone",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống.",
      },
      {
        field: "numberPhone",
        method: "isLength",
        args: [{ min: 5 }],
        validWhen: true,
        message: "Bắt buộc phải từ 5 kí tự.",
      },
      {
        field: "account",
        method: "isEmpty",
        validWhen: false,
        message: "Không được để trống.",
      },
      {
        field: "account",
        method: "isLength",
        args: [{ min: 5 }],
        validWhen: true,
        message: "Bắt buộc phải từ 5 kí tự.",
      },
      {
        field: "company",
        method: "isEmpty",
        validWhen: false,
        message: "Bắt buộc phải là file PNG và JPG.",
      },
    ];
    this.validator = new Validator(rules);
  }
  handleOnChane = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFileChange = (e) => {
    this.setState({ company: e.target.files[0] || null });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const {
      address,
      nation,
      webstie,
      email,
      numberPhone,
      name,
      password,
      account,
      company,
    } = this.state;
    const params = {
      address,
      nation,
      webstie,
      email,
      numberPhone,
      name,
      password,
      account,
      company,
    };
    this.props.register(params, (error, data) => {
      if (error) {
        return false;
      } else {
        this.props.getListUser();
      }
    });
  };
  handleSubmitButton = (e) => {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    console.log(this.state);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="RegisterEmloyer-bg">
        <ParticlesBg type="random" bg={true}/>
        <div className="container">
        <div className="Register-Emloyer">
          <Grid container>
            <Grid item xs={6} className="Login-Right text-center">
              <div className="Right-content">
                <form
                  onSubmit={this.handleSubmit}
                  action="/profile"
                  method="post"
                  enctype="multipart/form-data"
                >
                  <h3>ĐĂNG KÍ NHÀ TUYỂN DỤNG</h3>
                  <div className="Left-form">
                    <div className="userForm-Img">
                      <div>
                        <AccountBoxIcon className="userForm-Img-Icon" />
                      </div>
                      <input
                        type="file"
                        name="company"
                        sstyle={divStyle}
                        onChange={this.handleFileChange}
                      />
                      {errors.avatar && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.avatar}
                        </div>
                      )}
                    </div>
                    <div className="divInput">
                      <AccountCircleIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        label="Tên công ty"
                        onChange={this.handleOnChane}
                        name="name"
                        value={this.state.name}
                      />
                      {errors.name && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="divInput">
                      <MailOutlineIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        label="Email"
                        onChange={this.handleOnChane}
                        name="email"
                        value={this.state.email}
                      />
                      {errors.email && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="divInput">
                      <AccountCircleIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        label="Tài khoản"
                        onChange={this.handleOnChane}
                        name="account"
                        value={this.state.account}
                      />
                      {errors.account && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.account}
                        </div>
                      )}
                    </div>
                    <div className="divInput">
                      <LockOpenIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        label="Mật khẩu"
                        onChange={this.handleOnChane}
                        type="password"
                        name="password"
                        value={this.state.password}
                      />
                      {errors.password && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="divInput">
                      <LanguageIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        label="Website"
                        onChange={this.handleOnChane}
                        name="webstie"
                        value={this.state.webstie}
                      />
                      {errors.webstie && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.webstie}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="Right-form">
                    <div className="divInput">
                      <ContactPhoneIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        label="Số điện thoại"
                        onChange={this.handleOnChane}
                        name="numberPhone"
                        value={this.state.numberPhone}
                      />
                      {errors.numberPhone && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.numberPhone}
                        </div>
                      )}
                    </div>
                    <div className="divInput">
                      <BusinessIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        label="Địa chỉ"
                        onChange={this.handleOnChane}
                        name="address"
                        value={this.state.address}
                      />
                      {errors.address && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.address}
                        </div>
                      )}
                    </div>
                    <div className="divInput">
                      <NatureIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        label="Quốc gia"
                        onChange={this.handleOnChane}
                        name="nation"
                        value={this.state.nation}
                      />
                      {errors.nation && (
                        <div className="validation" style={{ display: "block" }}>
                          {errors.nation}
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={this.handleSubmitButton}
                  >
                    ĐĂNG KÍ
                  </Button>
                </form>
              </div>
              <div className="Move-Page">
                <span className="login-page">
                  Bạn đã có tài khoản
                  <Link to="/login" className="btn-MovePage">
                    <Button variant="contained">ĐĂNG NHẬP NGAY</Button>
                  </Link>
                </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => {
      dispatch(Action.actRegisterEmployer(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(ResigterEmployment);
