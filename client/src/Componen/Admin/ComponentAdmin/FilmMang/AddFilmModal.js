import React, { Component } from 'react';
//Component
import { connect } from 'react-redux';
import * as index from '../../../../ShareALL/action/index';
//Bs4
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class AddFilmModal extends Component {
	constructor(props) {
		super(props);
		// Add Film
		this.state = {
			maPhim: '',
			tenPhim: '',
			biDanh: '',
			trailer: '',
			maNhom: 'GP01',
			ngayKhoiChieu: '',
			danhGia: ''
		};
		//end add film

		//Modal
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			show: false
		};
		//end modal
	}
	//EDIT FILM
	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps);
	// 	if (nextProps && nextProps.editFilm) {
	// 		this.setState({
	// 			maPhim: nextProps.editFilm.maPhim,
	// 			tenPhim: nextProps.editFilm.tenPhim,
	// 			biDanh: nextProps.editFilm.biDanh,
	// 			trailer: nextProps.editFilm.trailer,
	// 			maNhom: nextProps.editFilm.maNhom,
	// 			ngayKhoiChieu: nextProps.editFilm.ngayKhoiChieu,
	// 			danhGia: nextProps.editFilm.danhGia
	// 		});
	// 	} else {
	// 		this.setState({
	// 			maPhim: '',
	// 			tenPhim: '',
	// 			biDanh: '',
	// 			trailer: '',
	// 			maNhom: 'GP01',
	// 			ngayKhoiChieu: '',
	// 			danhGia: ''
	// 		});
	// 	}
	// }
	//END EDIT FILM
	//Add Film
	handleOnChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addFilm(this.state);
	};
	//End Add Film
	//Modal
	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}
	//End modal
	render() {
		return (
			<div id="modelIdUserRedux" tabIndex={-1} role="dialog">
				<Button variant="primary" onClick={this.handleShow}>
					Thêm phim
				</Button>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Body>
						<form className="container" onSubmit={this.handleSubmit}>
							<h3>Thêm phim</h3>
							<div className="form-group">
								<span>Mã Phim</span>
								<input className="form-control"
									name="maPhim"
									onChange={this.handleOnChange} 
									value={this.state.maPhim} />
							</div>
							<div className="form-group">
								<span>Tên Phim</span>
								<input className="form-control"
									name="tenPhim"
									onChange={this.handleOnChange}
									value={this.state.tenPhim} />
							</div>
							<div className="form-group">
								<span>Bí Danh</span>
								<input className="form-control"
									name="biDanh"
									onChange={this.handleOnChange}
									value={this.state.biDanh} />
							</div>
							<div className="form-group">
								<span>Trailer</span>
								<input className="form-control"
									name="trailer"
									onChange={this.handleOnChange}
									value={this.state.trailer} />
							</div>
							<div className="form-group">
								<span>Hình Ảnh</span>
								<input className="form-control"
									name="hinhAnh"
									onChange={this.handleOnChange}
									value={this.state.hinhAnh} />
							</div>
							<div className="form-group">
								<span>Mô Tả</span>
								<input className="form-control"
									name="moTa"
									onChange={this.handleOnChange}
									value={this.state.moTa} />
							</div>
							<div className="form-group">
								<span>Mã nhóm</span>
								<input
									className="form-control"
									name="maNhom"
									value={this.state.maNhom}
									onChange={this.handleOnChange}
									value={this.state.maNhom}
								/>
							</div>
							<div className="form-group">
								<span>Ngày khởi chiếu</span>
								<input className="form-control"
									name="ngayKhoiChieu"
									onChange={this.handleOnChange}
									value={this.state.ngayKhoiChieu} />
							</div>
							<div className="form-group">
								<span>Đánh giá</span>
								<input className="form-control"
									name="danhGia"
									onChange={this.handleOnChange}
									value={this.state.danhGia} />
							</div>
							<div className="form-group">
								<Button type="submit" className="btn btn-success">
									Thêm người dùng
								</Button>
								<Button variant="secondary" onClick={this.handleClose}>
									Đóng
								</Button>
							</div>
						</form>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}
// const mapStateToProps = (state) => {
// 	return {
// 		editFilm: state.FilmReducer.editFilm
// 	};
// };
const mapDispatchToProps = (dispatch) => {
	return {
		addFilm: (movie) => {
			dispatch(index.ActAddAPI(movie));
		}
	};
};
export default connect( null,mapDispatchToProps)(AddFilmModal);
