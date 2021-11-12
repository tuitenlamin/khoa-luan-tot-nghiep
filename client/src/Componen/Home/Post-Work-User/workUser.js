import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Validator from '../../../utils/validator';
import { connect } from "react-redux";
import * as Action from "../../../ShareAll/Action/user";
import Render from './render';
const loadCreateWork = {
    marginTop: '42px'
}
class WorkUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameWork: "",
            experience: "",
            education: "",
            errors: {},
          
        };
        const rules = [
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
           
          ];
          this.validator = new Validator(rules);
    };
    handleOnChane = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createWorkUser(this.state);
    };
    componentDidMount() {
        this.props.getDetailUserWorkPost({});
    };
    handleSubmitError = (e) => {
        this.setState({
          errors: this.validator.validate(this.state),
        });
        console.log(this.state);
    };
    renderHTML = () => {    
       return    <Render createWork={this.props.listWorkUserPost} />; 
    };
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
                     <div >
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
                <div className="container">
                    <div className="row">
                    {this.renderHTML()}
                    </div>
                </div>            
              </Grid>
            </Grid>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        listWorkUserPost: state.userReducer.listWorkUserPost
    };
};
const mapDispatchToProps = dispatch => {
    return {
    getDetailUserWorkPost: () => {
        dispatch(Action.actGetListWorkUserAPI());
    },
    createWorkUser: (user) => {
        dispatch(Action.actCreateWorkUserAPI(user));
      },
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(WorkUser);
