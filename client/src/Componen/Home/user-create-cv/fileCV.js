import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as fileCV from "../../../ShareAll/Action/fileCV";
import Validator from '../../../utils/validator'
const divGrid = {
  padding: "25px 0px",
};
const divImg = {
  fontSize: "130px",
};
const divInput = {
  padding: "30px 0px",
};
const styleButtonImg = {
  border: "1px solid",
  borderRadius: "12px",
};

class FileCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numberPhone: "",
      address: "",
      experience: "",
      email: "",
      nation: "",
      description: "",
      skill: "",
      foreiginLanguage: "",
      education: "",
      sex: "",
      careerGoals: "",
      DateofBirth: "",
      Certificate: "",
      errors: {},
    };
    const rules = [
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
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Định dạng email @gmail .',
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'address',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'address',
        method: 'isLength',
        args: [{min: 8}],
        validWhen: true,
        message: 'Bắt buộc phải từ 8 kí tự.',
      },
      {
        field: 'numberPhone',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'numberPhone',
        method: 'isLength',
        args: [{min: 8}],
        validWhen: true,
        message: 'Bắt buộc phải từ 8 kí tự.',
      },
      {
        field: 'experience',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'experience',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'nation',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'nation',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'description',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'description',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'skill',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'skill',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'foreiginLanguage',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'foreiginLanguage',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'education',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'education',
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
        message: 'Bắt buộc phải từ 8 kí tự.',
      },
      {
        field: 'careerGoals',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'careerGoals',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 8 kí tự.',
      },
      {
        field: 'DateofBirth',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'DateofBirth',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 8 kí tự.',
      },
      {
        field: 'Certificate',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'Certificate',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 8 kí tự.',
      },
      {
        field: 'avatar',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'avatar',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải là file PNG và JPG.',
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
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCV(this.state);
  };
  handleSubmitButtonError = (e) => {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    console.log(this.state);
  };
  render() {
    const {errors} = this.state;
    return (
      <div className=" text-center FileCV">
        <form onSubmit={this.handleSubmit} container>
          <div>
            <Grid container>
              <Grid item xs={3} style={divGrid}>
                <div style={divInput}>
                  <input type="file"/><AccountCircleRoundedIcon style={divImg} name="avatar" value={this.state.avatar}/>
                  {/* {errors.avatar && <div className="validation" style={{display: 'block'}}>{errors.avatar}</div>} */}
                </div>
                <div style={divInput}>
                  <TextField
                    id="standard-basic"
                    label="Họ và Tên"
                    onChange={this.handleOnChane}
                    name="name"
                    value={this.state.name}
                  />
                   {errors.name && <div className="validation" style={{display: 'block'}}>{errors.name}</div>}
                </div>
                <div style={divInput}>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    onChange={this.handleOnChane}
                    name="email"
                    value={this.state.email}
                  />
                   {errors.email && <div className="validation" style={{display: 'block'}}>{errors.email}</div>}
                </div>
                <div style={divInput}>
                  <TextField
                    id="standard-basic"
                    label="Số điện thoại"
                    onChange={this.handleOnChane}
                    name="numberPhone"
                    value={this.state.numberPhone}
                  />
                  {errors.numberPhone && <div className="validation" style={{display: 'block'}}>{errors.numberPhone}</div>}
                </div>
              </Grid>
              <Grid item xs={3} style={divGrid}>
                <div>
                  <h4>Thông tin cá nhân </h4>
                  <div style={divInput}>
                    <TextField
                      id="standard-basic"
                      label="Địa chỉ"
                      onChange={this.handleOnChane}
                      name="address"
                      value={this.state.address}
                    />
                      {errors.address && <div className="validation" style={{display: 'block'}}>{errors.address}</div>}
                  </div>
                  <div style={divInput}>
                    <TextField
                      id="standard-basic"
                      label="Ngày sinh"
                      onChange={this.handleOnChane}
                      name="DateofBirth"
                      value={this.state.DateofBirth}
                    />
                     {errors.DateofBirth && <div className="validation" style={{display: 'block'}}>{errors.DateofBirth}</div>}
                  </div>
                </div>
                <div style={divInput}>
                  <TextField
                    id="standard-basic"
                    label="Giới tính"
                    onChange={this.handleOnChane}
                    name="sex"
                    value={this.state.sex}
                  />
                   {errors.sex && <div className="validation" style={{display: 'block'}}>{errors.sex}</div>}
                </div>
                <div style={divInput}>
                  <TextField
                    id="standard-basic"
                    label="Quốc gia"
                    onChange={this.handleOnChane}
                    name="nation"
                    value={this.state.nation}
                  />
                   {errors.nation && <div className="validation" style={{display: 'block'}}>{errors.nation}</div>}
                </div>
              </Grid>
              <Grid item xs={3} style={divGrid}>
                <div>
                  <h4>Nghành nghề</h4>
                  <div style={divInput}>
                    <TextField
                      id="standard-basic"
                      label="Nghành Nghề"
                      onChange={this.handleOnChane}
                      name="description"
                      value={this.state.description}
                    />
                     {errors.description && <div className="validation" style={{display: 'block'}}>{errors.description}</div>}
                  </div>
                  <div style={divInput}>
                    <TextField
                      id="standard-basic"
                      label="Chứng chỉ"
                      onChange={this.handleOnChane}
                      name="Certificate"
                      value={this.state.Certificate}
                    />
                     {errors.Certificate && <div className="validation" style={{display: 'block'}}>{errors.Certificate}</div>}
                  </div>
                  <div style={divInput}>
                    <TextField
                      id="standard-basic"
                      label="Kinh nghiệm"
                      onChange={this.handleOnChane}
                      name="experience"
                      value={this.state.experience}
                    />
                     {errors.experience && <div className="validation" style={{display: 'block'}}>{errors.experience}</div>}
                  </div>
                  <div style={divInput}>
                    <TextField
                      id="standard-basic"
                      label="Ngôn ngữ sử dụng"
                      onChange={this.handleOnChane}
                      name="skill"
                      value={this.state.skill}
                    />
                       {errors.skill && <div className="validation" style={{display: 'block'}}>{errors.skill}</div>}
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} style={divGrid}>
                <div style={divInput}>
                  <h4>Học vấn</h4>
                  <TextField
                    id="standard-basic"
                    label="Học vấn"
                    onChange={this.handleOnChane}
                    name="education"
                    value={this.state.education}
                  />
                   {errors.education && <div className="validation" style={{display: 'block'}}>{errors.education}</div>}
                </div>
                <div style={divInput}>
                  <h4>Ngoại ngữ</h4>
                  <TextField
                    id="standard-basic"
                    label="Ngoại ngữ"
                    onChange={this.handleOnChane}
                    name="foreiginLanguage"
                    value={this.state.foreiginLanguage}
                  />
                  {errors.foreiginLanguage && <div className="validation" style={{display: 'block'}}>{errors.foreiginLanguage}</div>}
                </div>
              </Grid>
              <div className="container text-center">
                <TextField
                  id="standard-multiline-static"
                  label="Mục tiêu nghề nghiệp"
                  multiline
                  rows={4}
                  defaultValue="Mục tiêu nghề nghiệp"
                  onChange={this.handleOnChane}
                  name="careerGoals"
                  value={this.state.careerGoals}
                />
                 {errors.careerGoals && <div className="validation" style={{display: 'block'}}>{errors.careerGoals}</div>}
              </div>
            </Grid>
            <Button variant="contained" type="submit" onClick={this.handleSubmitButtonError}>
              Tạo CV
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createCV: (user) => {
      dispatch(fileCV.actCreateFileCV(user));
    },
  };
};
export default connect(null, mapDispatchToProps)(FileCV);
