// import React, { Component } from 'react';
// import * as AdminLogin from '../../../../ShareALL/action/AdminLogin';
// import { connect } from 'react-redux';

// export default class ModalEdituser extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			taiKhoan: '',
// 			matKhau: '',
// 			email: '',
// 			soDt: '',
// 			maNhom: '',
// 			maLoaiNguoiDung: '',
// 			hoTen: ''
// 		};
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		console.log(nextProps);
// 		if (nextProps && nextProps.userEdit) {
// 			this.setState({
// 				taiKhoan: nextProps.userEdit.taiKhoan,
// 				hoTen: nextProps.userEdit.hoTen,
// 				matKhau: nextProps.userEdit.matKhau,
// 				soDt: nextProps.userEdit.soDt,
// 				email: nextProps.userEdit.email,
// 				maNhom: nextProps.userEdit.maNhom,
// 				maLoaiNguoiDung: nextProps.userEdit.maLoaiNguoiDung
// 			});
// 		} else {
// 			this.setState({
// 				maLoaiNguoiDung: '',
// 				matKhau: '',
// 				soDt: '',
// 				email: '',
// 				maNhom: '',
// 				hoTen: '',
// 				maLoaiNguoiDung: 'USER'
// 			});
// 		}
//     }

// 	handleOnChange = (event) => {
// 		let hoTen = event.target.hoTen;
// 		let value = event.target.value;

// 		this.setState({
// 			[hoTen]: value
// 		});
//     };

//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.onsubmit(this.state);
//       };
// 	render() {
//     return (
//       <div
//         className="modal fade"
//         id="modelIdUserRedux"
//         tabIndex={-1}
//         role="dialog"
//         aria-labelledby="modelTitleId"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">
//                 {this.props.userEdit ? "Edit user" : "Add user"}
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">×</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                   <label>Username</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="username"
//                     onChange={this.handleOnChange}
//                     value={this.state.username}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="name"
//                     onChange={this.handleOnChange}
//                     value={this.state.name}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="email"
//                     onChange={this.handleOnChange}
//                     value={this.state.email}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="phoneNumber"
//                     onChange={this.handleOnChange}
//                     value={this.state.phoneNumber}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Type</label>
//                   <select
//                     className="form-control"
//                     name="type"
//                     onChange={this.handleOnChange}
//                     value={this.state.type}
//                   >
//                     <option>USER</option>
//                     <option>VIP</option>
//                   </select>
//                 </div>
//                 <button type="submit" className="btn btn-success">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//     return {
//       userEdit: state.userReducer.userEdit
//     };
//   };

//   const mapDispatchToProps = dispatch => {
//     return {s
//       onsubmit: user => {
//         dispatch(AdminLogin.ActEditUserAPI(user));
//       }
//     };
//   };
//   export default connect(mapStateToProps, mapDispatchToProps)(ModalEdituser);
