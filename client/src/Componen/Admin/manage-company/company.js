import React, { Component } from 'react'
import RenderCompany from './renderCompany';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/company";
import * as company from  "../../../ShareAll/Action/company";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Validator from '../../../utils/validator';
 class Company extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: "",
        address: "",
        nation: "",
        webstie: "",
        email: "",
        numberPhone: "",
        company: "",
        password: "",
        account: "",
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
          field: 'numberPhone',
          method: 'isEmpty',
          validWhen: false,
          message: 'Không được để trống.',
        },
        {
          field: 'numberPhone',
          method: 'isLength',
          args: [{min: 5}],
          validWhen: true,
          message: 'Bắt buộc phải từ 5 kí tự số.',
        },
        {
          field: 'company',
          method: 'isEmpty',
          validWhen: false,
          message: 'Không được để trống và phải là file PNG và JPG.',
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
    this.setState({company: e.target.files[0] || null});
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
      this.props.createCompany(params, (error, data) => {
        if (error) {
          return false;
        } else {
          this.props.createCompany();
        }
      });
  };
  componentDidMount() {
      this.props.getCompany();
  }
  renderHTML = () => {
      return this.props.getListCompany.map(rendercompany => {
          return <RenderCompany rendercompany={rendercompany} />;
      });
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
            <>
            <Grid item xs={12} container>   
            <div className="companyForm text-center">
            <form onSubmit={this.handleSubmit} action="/company" method="post" enctype="multipart/form-data">
              <h1 className="container text-center" >Thêm Công Ty</h1>
                  <div className="companyForm-Img">
                    <div> <AspectRatioIcon className="companyForm-Icon"/> </div>
                    <input type="file" name="company"  onChange={this.handleFileChange}/>
                    {errors.avatar && <div className="validation" style={{display: 'block'}}>{errors.avatar}</div>}
                  </div>
                  <div className="companyForm-left">
                    <div className="Company-div">
                      <TextField
                        id="standard-basic"
                        label="Họ và Tên"
                        onChange={this.handleOnChane}
                        name="name"
                        value={this.state.name}
                      />
                      {errors.name && <div className="validation" style={{display: 'block'}}>{errors.name}</div>}
                    </div>
                    <div className="Company-div">
                      <TextField
                        id="standard-basic"
                        label="Địa chỉ"
                        onChange={this.handleOnChane}
                        name="address"
                        value={this.state.address}
                      />
                    {  errors.address && <div className="validation" style={{display: 'block'}}>{errors.address}</div>}
                    </div>
                    <div className="Company-div">
                      <TextField
                        id="standard-basic"
                        label="Quốc gia"
                        onChange={this.handleOnChane}
                        name="nation"
                        value={this.state.nation}
                      />
                      {errors.nation && <div className="validation" style={{display: 'block'}}>{errors.nation}</div>}
                    </div>
                    <div className="Company-div">
                      <TextField
                        id="standard-basic"
                        label="Website"
                        onChange={this.handleOnChane}
                        name="webstie"
                        value={this.state.webstie}
                      /> 
                      {errors.webstie && <div className="validation" style={{display: 'block'}}>{errors.webstie}</div>}
                    </div>
                  </div>
                  <div className="companyForm-right">
                    <div className="Company-div">
                      <TextField
                        id="standard-basic"
                        label="Email"
                        onChange={this.handleOnChane}
                        name="email"
                        value={this.state.email}
                      />
                      {errors.email && <div className="validation" style={{display: 'block'}}>{errors.email}</div>}
                    </div>
                    <div className="Company-div">
                      <TextField
                        id="standard-basic"
                        label="Số điện thoại"
                        onChange={this.handleOnChane}
                        name="numberPhone"
                        value={this.state.numberPhone}
                      />
                      {errors.numberPhone && <div className="validation" style={{display: 'block'}}>{errors.numberPhone}</div>}
                    </div>
                    {/* //// */}
                    <div className="Company-div">
                      <TextField
                        id="standard-basic"
                        label="acoount"
                        onChange={this.handleOnChane}
                        name="account"
                        value={this.state.account}
                      />
                      {errors.account && <div className="validation" style={{display: 'block'}}>{errors.account}</div>}
                    </div>
                    <div className="Company-div">
                      <TextField
                        id="standard-basic"
                        label="mật khẩu"
                        onChange={this.handleOnChane}
                        name="password"
                        value={this.state.password}
                      />
                      {errors.password && <div className="validation" style={{display: 'block'}}>{errors.password}</div>}
                    </div>
                    <Button variant="contained" type="submit" color="secondary" onClick={this.handleSubmitButtonError}>
                      Thêm công ty
                    </Button>
                  </div>  
            </form>
            </div>
          </Grid>
              <TableContainer component={Paper}>
              <Table aria-label="caption table">
              <TableHead>
                  <TableRow>
                  <TableCell>Hình ảnh</TableCell>
                  <TableCell>Tên công ty</TableCell>
                  <TableCell>Địa chỉ</TableCell>
                  <TableCell>Quốc gia</TableCell>
                  <TableCell>Website</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Số điện thoại</TableCell>
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
      getListCompany: state.companyReducer.getListCompany
    };
};
  
  const mapDispatchToProps = dispatch => {
    return {
    getCompany: () => {
        dispatch(Action.actGetListCompanyAPI());
    },
    createCompany: createCopany => {
        dispatch(company.actCreateCompanyAdminAPI(createCopany));
    }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Company)