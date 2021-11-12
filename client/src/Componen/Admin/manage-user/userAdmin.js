import React, { Component } from 'react';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/user";
import * as login from  "../../../ShareAll/Action/login";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import User from './User';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Validator from '../../../utils/validator';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CakeIcon from '@material-ui/icons/Cake';
import WorkIcon from '@material-ui/icons/Work';
import LanguageIcon from '@material-ui/icons/Language';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const divIcon = {
  marginTop: "25px",
  marginRight: "14px",
};
const styleFormMargrin = {
  marginLeft: '317px'
};
const divImg = {
  fontSize: "130px",
};
const divStyle = {
  marginLeft: '170px'
};
const divFormIMG = {
  paddingLeft: '237px'
}
class CreateTypeWork extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      account: "",
      password: "",
      phone: "",
      sex: "",
      birthday: "",
      avatar: "",
      type:"",
      errors: {},
      listUserWork:[]
    };
    const rules = [
      {
        field: 'account',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'account',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Định dạng email @gmail .',
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'password',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'name',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'name',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'phone',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'phone',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'sex',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'sex',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'birthday',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'birthday',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'avatar',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống và file là PNG và JPG.',
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
    this.setState({avatar: e.target.files[0] || null});
  };
  componentDidMount() {
    this.props.getListUser();
   // this.setState({listUserWork:this.props.listUser})
  };
 
  renderHTML = () => {
    return this.props.listUser.map(renderUser => {
      return <User renderUser={renderUser} />;
    });
  };
  handleSubmit = (event) => {
		event.preventDefault();
		this.props.register(this.state, (error, data) => {
      if (error) {
        return false;
      } else {
        this.props.getListUser();
      }
    });
	};
  handleSubmitError = (e) => {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    console.log(this.state);
  };
  render(){
    const {errors} = this.state;
  return (
    <>
    <div className="container" id="Register-User" style = {styleFormMargrin}>
        <div className="row">
        <Grid container>
          <Grid item xs={6} className="Login-Right text-center">
            <div className="Right-content">
              <form onSubmit={this.handleSubmit} action="/profile" method="post" enctype="multipart/form-data">
              <h1>Đăng kí</h1>
              <div className="About container">
              <div className="row row--35">
                <div className="Left-form col-lg-4 col-md-6 col-12">
                <div style={divFormIMG}>
                    <div>
                      <AccountBoxIcon className="userForm-Img-Icon" />
                    </div>
                    <input
                      type="file"
                      name="avatar"
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
                      label="Họ và Tên"
                      onChange={this.handleOnChane}
                      name="name"
                      value={this.state.name}
                    />
                      {errors.name && <div className="validation" style={{display: 'block'}}>{errors.name}</div>}
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
                    {errors.email && <div className="validation" style={{display: 'block'}}>{errors.email}</div>} 
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
                    {errors.account && <div className="validation" style={{display: 'block'}}>{errors.account}</div>} 
                  </div>
                  <div className="divInput">
                    <VpnKeyIcon style={divIcon} />
                    <TextField
                      id="standard-basic"
                      label="Mật khẩu"
                      onChange={this.handleOnChane}
                      type="password"
                      name="password"
                      value={this.state.password}
                    />
                      {errors.password && <div className="validation" style={{display: 'block'}}>{errors.password}</div>} 
                  </div>
                </div>
                <div className="Right-form col-lg-4 col-md-6 col-12 Right-form-user">
                  <div className="divInput">
                    <ContactPhoneIcon style={divIcon} />
                    <TextField
                      id="standard-basic"
                      label="Số điện thoại"
                      onChange={this.handleOnChane}
                      name="phone"
                      value={this.state.phone}
                    />
                    {errors.phone && <div className="validation" style={{display: 'block'}}>{errors.phone}</div>} 
                  </div>
                  <div className="divInput">
                    <CakeIcon style={divIcon} />
                    <TextField
                      id="standard-basic"
                      label="Ngày sinh"
                      onChange={this.handleOnChane}
                      name="birthday"
                      value={this.state.birthday}
                    />
                     {errors.birthday && <div className="validation" style={{display: 'block'}}>{errors.birthday}</div>} 
                  </div> 
                  <div className="divInput">
                    <WorkIcon style={divIcon} />
                    <TextField
                      id="standard-basic"
                      label="Kinh nghiệm"
                      onChange={this.handleOnChane}
                      name="experience"
                      value={this.state.experience}
                    />
                     {errors.experience && <div className="validation" style={{display: 'block'}}>{errors.experience}</div>} 
                  </div>           
                  <RadioGroup className="Register-form" name="sex" name="gender1" value={this.state.sex} onChange={this.handleOnChane}>
                        <FormControlLabel
                          control={<Radio />}
                          label="Nam"
                          value="Nam"
                          name="sex"   
                        />
                        <FormControlLabel
                          control={<Radio />}
                          label="Nữ"
                          value="Nữ"
                          name="sex"    
                        />
                </RadioGroup>
                </div>
                <div className="Right-form col-lg-4 col-md-6 col-12 Right-form-user">
                  <div className="divInput">
                    <WorkIcon style={divIcon} />
                    <TextField
                      id="standard-basic"
                      label="Kĩ năng"
                      onChange={this.handleOnChane}
                      name="skill"
                      value={this.state.skill}
                    />
                    {errors.skill && <div className="validation" style={{display: 'block'}}>{errors.skill}</div>} 
                  </div>
                  <div className="divInput">
                    <LanguageIcon style={divIcon} />
                    <TextField
                      id="standard-basic"
                      label="Ngoại ngữ"
                      onChange={this.handleOnChane}
                      name="foreiginLanguage"
                      value={this.state.foreiginLanguage}
                    />
                     {errors.foreiginLanguage && <div className="validation" style={{display: 'block'}}>{errors.foreiginLanguage}</div>} 
                  </div> 
                  <div className="divInput">
                    <CastForEducationIcon style={divIcon} />
                    <TextField
                      id="standard-basic"
                      label="Học vấn"
                      onChange={this.handleOnChane}
                      name="education"
                      value={this.state.education}
                    />
                     {errors.education && <div className="validation" style={{display: 'block'}}>{errors.education}</div>} 
                  </div>           
                  <div className="divInput">
                    <DescriptionIcon style={divIcon} />
                    <TextField
                      id="standard-basic"
                      label="Giới thiệu bản thân"
                      onChange={this.handleOnChane}
                      name="description"
                      value={this.state.description}
                    />
                     {errors.description && <div className="validation" style={{display: 'block'}}>{errors.description}</div>} 
                  </div>
                </div>
              </div>
              <div >
              <RadioGroup className="Register-form" name="sex" name="gender1" value={this.state.type} onChange={this.handleOnChane}>
                  <FormControlLabel
                    control={<Radio />}
                    label="Ứng Viên"
                    value="UNGVIEN"
                    name="type"    
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Nhà Quản Trị"
                    value="ADMIN"
                    name="type"    
                  />
                </RadioGroup>
              </div>
              </div>
                <Button variant="contained" type="submit" onClick={this.handleSubmitButton}>ĐĂNG KÍ</Button>
              </form>  
            </div>
          </Grid>
        </Grid>
        </div>
    </div>
    <TableContainer component={Paper}>
    <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Hình ảnh</TableCell>
            <TableCell >Họ và Tên</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Số điện thoại</TableCell>
            <TableCell >Giới tính</TableCell>
            <TableCell >Ngày sinh</TableCell>
            <TableCell >Kinh Ngiệm</TableCell>
            <TableCell >Kĩ năng</TableCell>
            <TableCell >Mô tả bản thân</TableCell>
            <TableCell >Ngoại ngữ</TableCell>
            <TableCell >Học vấn</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {this.renderHTML()}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
   }
}

const mapStateToProps = state => {
  return {
    listUser: state.userReducer.listUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListUser: () => {
      dispatch(Action.actGetListUserAPI());
    },
    register: (user, cb) => {
			dispatch(login.actRegisterUser(user, cb));
		}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTypeWork);