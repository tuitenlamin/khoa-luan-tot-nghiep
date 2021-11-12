import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import * as Action from  "../../../../ShareAll/Action/company";
import Validator from '../../../../utils/validator'
class CreateCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          address: "",
          nation: "",
          webstie: "",
          email: "",
          numberPhone: "",
          avatar: "",
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
              field: 'address',
              method: 'isEmpty',
              validWhen: false,
              message: 'Không được để trống.',
            },
            {
              field: 'address',
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
              field: 'webstie',
              method: 'isEmpty',
              validWhen: false,
              message: 'Không được để trống.',
            },
            {
              field: 'webstie',
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
              method: 'isLength',
              args: [{min: 5}],
              validWhen: true,
              message: 'Bắt buộc phải từ 5 kí tự.',
            },
            {
              field: 'numberPhone',
              method: 'isEmpty',
              validWhen: false,
              message: 'Không được để trống và phải là chữ số.',
            },
            {
              field: 'numberPhone',
              method: 'isLength',
              args: [{min: 5}],
              validWhen: true,
              message: 'Bắt buộc phải từ 5 kí tự.',
            },
            {
              field: 'numberPhone',
              method: 'isEmpty',
              validWhen: false,
              message: 'Không được để trống và phải là chữ số.',
            },
            {
              field: 'numberPhone',
              method: 'isLength',
              args: [{min: 5}],
              validWhen: true,
              message: 'Bắt buộc phải từ 5 kí tự.',
            },
            {
                field: 'avatar',
                method: 'isEmpty',
                validWhen: false,
                message: 'Không được để trống\.',
            },
            {
                field: 'avatar',
                method: 'isLength',
                args: [{min: 5}],
                validWhen: true,
                message: 'Bắt buộc phải là định dạng file PNG và JPG.',
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
  handleSubmit = (event) => {
      event.preventDefault();
      this.props.createCompany(this.state, (error, data) => {
        if (error) {
          return false;
        } else {
          this.props.createCompany();
        }
      });
  };
  handleSubmitError = (e) => {
    this.setState({
      errors: this.validator.validate(this.state),
    });
    console.log(this.state);
  };
    render() {
        const {errors} = this.state;
        return ( 
            <>
             <Grid item xs={12} container>
                <h1 className="container text-center">Thêm Công Ty</h1>
                <div className="companyForm text-center">
                <form onSubmit={this.handleSubmit} action="/company" method="post" enctype="multipart/form-data">
                    <div className="companyForm-Img">
                        <div> <AspectRatioIcon className="companyForm-Icon"/> </div>
                        <input type="file" name="avatar"  onChange={this.handleFileChange} value={this.state.avatar}/>
                        {errors.avatar && <div className="validation" style={{display: 'block'}}>{errors.avatar}</div>}
                    </div>
                    <div className="companyForm-left">
                        <TextField
                        id="standard-basic"
                        label="Họ và Tên"
                        onChange={this.handleOnChane}
                        name="name"
                        value={this.state.name}
                        />
                         {errors.name && <div className="validation" style={{display: 'block'}}>{errors.name}</div>}
                        <TextField
                        id="standard-basic"
                        label="Địa chỉ"
                        onChange={this.handleOnChane}
                        name="address"
                        value={this.state.address}
                        />
                        {errors.address && <div className="validation" style={{display: 'block'}}>{errors.address}</div>}
                        <TextField
                        id="standard-basic"
                        label="Quốc gia"
                        onChange={this.handleOnChane}
                        name="nation"
                        value={this.state.nation}
                        />
                        {errors.nation && <div className="validation" style={{display: 'block'}}>{errors.nation}</div>}
                    </div>
                    <div className="text-center">
                    <TextField
                        id="standard-basic"
                        label="Website"
                        onChange={this.handleOnChane}
                        name="webstie"
                        value={this.state.webstie}
                    />
                     {errors.webstie && <div className="validation" style={{display: 'block'}}>{errors.webstie}</div>} 
                    <TextField
                        id="standard-basic"
                        label="Email"
                        onChange={this.handleOnChane}
                        name="email"
                        value={this.state.email}
                    />
                    {errors.email && <div className="validation" style={{display: 'block'}}>{errors.email}</div>} 
                    <TextField
                        id="standard-basic"
                        label="Số điện thoại"
                        onChange={this.handleOnChane}
                        name="numberPhone"
                        value={this.state.numberPhone}
                    />
                      {errors.numberPhone && <div className="validation" style={{display: 'block'}}>{errors.numberPhone}</div>} 
                    </div>
            
                <Button variant="contained" type="submit" color="secondary" onClick={this.handleSubmitError}>
                    Thêm công ty
                </Button>
                </form>
            </div>
        </Grid>
            </>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createCompany: createCopany => {
            dispatch(Action.actCreateCompanyAdminAPI(createCopany));
        }
    };
  };
export default connect(null, mapDispatchToProps)(CreateCompany);
