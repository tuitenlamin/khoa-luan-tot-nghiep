import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CreateWork from "./createWork";
import { connect } from "react-redux";
import * as work from "../../../ShareAll/Action/work";
import * as ActionTypeWork from "../../../ShareAll/Action/work"
import Validator from '../../../utils/validator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RenderItem from './RenderMenuItem'
const loadCreateWork = {
    marginTop: '42px'
};
const divStyle = {
    paddingBottom: '40px'
}
class RenderPostWorkEmployer extends Component {
  constructor(props){
    super(props);
    console.log('phat construct')
    this.state = {
      nameWork: "",
      experience: "",
      education: "",
      description: "",
      request: "",
      salary:"",
      typeWork:"id",
      addr:"",
      levelWork:"",
      errors: {},
    }
    const rules = [
      {
        field: 'levelWork',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'levelWork',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'addr',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'addr',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'nameWork',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'nameWork',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
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
        field: 'request',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống.',
      },
      {
        field: 'request',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
      },
      {
        field: 'salary',
        method: 'isEmpty',
        validWhen: false,
        message: 'Không được để trống và phải là chữ số.',
      },
      {
        field: 'salary',
        method: 'isLength',
        args: [{min: 5}],
        validWhen: true,
        message: 'Bắt buộc phải từ 5 kí tự.',
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
    this.props.createWorkEmployer(this.state);
  };
  componentDidMount() {
    this.props.getDetail();
    this.props.getTypeWork();
  }
  renderHTML = () => {
      return <CreateWork createWork={this.props.detailWorkFromCompany} />;
  };
  handleSubmitError = (e) => {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    console.log(this.state);
  };
  MenuItem = () =>{
    return this.props.listTypeWork.map(typeWork => {
      return <RenderItem typeWork={typeWork} />;
    });
  }
  // handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  render() {
    const {errors} = this.state;
    return (
      <div className="container">
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <div className="Content text-center">
                <h3>Đăng Bài Viết</h3>
                <form onSubmit={this.handleSubmit}>
                 <div className="create-wrok-form">
                 <div className="form-left">
                    <div className="Create-Work">
                      <TextField
                        id="standard-basic"
                        label="Tên công việc"
                        onChange={this.handleOnChane}
                        name="nameWork"
                        value={this.state.nameWork}
                      />
                       {errors.nameWork && <div className="validation" style={{display: 'block'}}>{errors.nameWork}</div>}
                    </div>
                    <div className="Create-Work">
                      <TextField
                        id="standard-basic"
                        label="Kinh nghiệm"
                        onChange={this.handleOnChane}
                        name="experience"
                        value={this.state.experience}
                      />
                       {errors.experience && <div className="validation" style={{display: 'block'}}>{errors.experience}</div>}
                    </div>
                    <div className="Create-Work">
                      <TextField
                        id="standard-basic"
                        label="Học vấn"
                        onChange={this.handleOnChane}
                        name="education"
                        value={this.state.education}
                      />
                      {errors.education && <div className="validation" style={{display: 'block'}}>{errors.education}</div>}
                    </div>
                    <div className="Create-Work">
                      <TextField
                        id="standard-basic"
                        label="Địa chỉ"
                        onChange={this.handleOnChane}
                        name="addr"
                        value={this.state.addr}
                      />
                      {errors.addr && <div className="validation" style={{display: 'block'}}>{errors.addr}</div>}
                    </div>
                  </div>
                  <div className="form-right">
                    <div className="Create-Work">
                      <TextField
                        id="standard-basic"
                        label="Mô tả công việc"
                        onChange={this.handleOnChane}
                        name="description"
                        value={this.state.description}
                      />
                       {errors.description && <div className="validation" style={{display: 'block'}}>{errors.description}</div>}
                    </div>
                    <div className="Create-Work">
                      <TextField
                        id="standard-basic"
                        label="Yêu cầu"
                        onChange={this.handleOnChane}
                        name="request"
                        value={this.state.request}
                      />
                      {errors.request && <div className="validation" style={{display: 'block'}}>{errors.request}</div>}
                    </div>
                    <div className="Create-Work">
                      <TextField
                        id="standard-basic"
                        label="Lương"
                        onChange={this.handleOnChane}
                        name="salary"
                        value={this.state.salary}
                      />
                       {errors.salary && <div className="validation" style={{display: 'block'}}>{errors.salary}</div>}
                    </div>
                    <div className="Create-Work">
                      <TextField
                        id="standard-basic"
                        label="Trình độ"
                        onChange={this.handleOnChane}
                        name="levelWork"
                        value={this.state.levelWork}
                      />
                       {errors.levelWork && <div className="validation" style={{display: 'block'}}>{errors.levelWork}</div>}
                    </div>
                  </div>
                 </div>
                  <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmitError}>
                    Tạo
                  </Button>
                </form>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} style={loadCreateWork}>
            <Grid container>
              {this.renderHTML()}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailWorkFromCompany: state.workReducer.detailWorkFromCompany,
    listTypeWork: state.typeworkReducer.listTypeWork,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail: () => {
      dispatch(work.actDetailInfoUserWorkAPI());
    },
    createWorkEmployer: (user) => {
      dispatch(work.actCreateWorkEmployer(user));
    },
    getTypeWork: () => {
      dispatch(ActionTypeWork.actDetailInfoUserWorkFromCompanyAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderPostWorkEmployer)