import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AdminLogin from '../../../../ShareALL/action/AdminLogin';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

class ListUser extends Component {
	render() {
	let	{ user } = this.props;
		return (
			<tr>
				<td bsPrefix>{user.hoTen}</td>
				<td bsPrefix>{user.email}</td>
				<td bsPrefix>{user.soDt}</td>
				<td bsPrefix>{user.taiKhoan}</td>
				<td bsPrefix>{user.matKhau}</td>
				<td bsPrefix>{user.maLoaiNguoiDung}</td>
				<td>
					<Button
						variant="contained"
						color="primary"
						startIcon={<DeleteIcon />}
						onClick={() => {
							this.props.DeleteUser(user);
						}}
					/>
					<Button
						variant="contained"
						color="primary"
						startIcon={<EditIcon />}
						data-toggle="modal"
						data-target="#modelIdUserRedux"
						onClick={() => {
							this.props.editUser(user);
						}}
					/>
				</td>
			</tr>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		DeleteUser: (user) => {
			dispatch(AdminLogin.ActDeleteAUAPI(user));
		},
		editUser: (user) => {
			dispatch(AdminLogin.ActEditUserAPI(user));
		}
	};
};
export default connect(null, mapDispatchToProps)(ListUser);
