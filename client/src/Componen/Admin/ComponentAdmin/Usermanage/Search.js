// // import React, { Component } from 'react';
// // import { connect } from 'react-redux';
// // import * as AdminLogin from '../../../../ShareALL/action/AdminLogin';

// // class Search extends Component {
// // 	render() {
// // 		return (
// // 			<input
// // 				placeholder="Tìm kiếm người dùng"
// // 				type="text"
// // 				className="form-control mb-3 w-50"
// // 				onChange={(e) => {
// // 					this.props.getKeyWord(e.target.value);
// // 				}}
// // 			/>
// // 		);
// // 	}
// // }

// // const mapDispatchToProp = (dispatch) => {
// // 	return {
// // 		getKeyWord: (keyword) => {
// // 			dispatch(AdminLogin.ActTimKiemNguoiDungAPI(keyword));
// // 		}
// // 	};
// // };

// // export default connect(null, mapDispatchToProp)(Search);
// import React from 'react'
// import MaterialTable from 'material-table';
// export default function Search() {
// 	return (
// 		<MaterialTable
    
// 		options={{
// 		  search: true
// 		}}
// 	  />
// 	)
// }
