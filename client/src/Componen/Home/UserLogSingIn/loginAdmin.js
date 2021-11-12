import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as login from "../../../ShareAll/Action/login";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Button from "@material-ui/core/Button";
import Validator from '../../../utils/validator'
const divIcon = {
	marginTop: "25px",
	marginRight: "14px",
  };
const divButton = {
	marginTop: '38px'
}

class LoginAdmin extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  account: "",
		  password: "",
		  errors: {},
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
		  ];
		  this.validator = new Validator(rules);
	  }

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

	handleSubmit = (e) => {
		this.setState({
		  errors: this.validator.validate(this.state),
		});
		console.log(this.state);
	};
	render() {
		const {errors} = this.state;
		return (			
			<div className="login-Admin" >
				<div className="container" container>
					<Grid container>
						<Grid xs={12}>
							<div className="login-admin-form container text-center" >
								<h2>CHÀO MỪNG NHÀ QUẢN TRỊ</h2>
							<form onSubmit={this.handleLogin}>
							<div className="divInput">
								<AccountCircleIcon style={divIcon} />
								<TextField
									color="primary"
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
									name="password"
									type="password"
									value={this.state.password}
								/>
								  {errors.password && <div className="validation" style={{display: 'block'}}>{errors.password}</div>}
							</div>
							<Button variant="contained" color="secondary" type="submit" style={divButton} onClick={this.handleSubmit}>
								ĐĂNG NHẬP
							</Button>
							</form>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	  sigin: (user, history) => {
		dispatch(login.actLoginAdmin(user, history));
	  },
	};
  };

export default connect(null, mapDispatchToProps)  (LoginAdmin);
