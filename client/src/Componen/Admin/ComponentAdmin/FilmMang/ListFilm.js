import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as FilmAction from '../../../../ShareALL/action/FilmAction';
import Image from 'react-bootstrap/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

class ListFilm extends Component {
	render() {
		const { movie } = this.props;
		return (
			<tr>
				<td>{movie.maPhim}</td>
				<td>{movie.tenPhim}</td>
				<td>{movie.biDanh}</td>
				<td>
					<div bsPrefix className="Film-trailer">
						{movie.trailer}
					</div>
				</td>
				<td>
					<div className="Film-img">
						<Image alt="" src={movie.hinhAnh} bsPrefix />
					</div>
				</td>
				<td>{movie.moTa}</td>
				<td>{movie.maNhom}</td>
				<td>{new Date(movie.ngayKhoiChieu).toLocaleDateString()}</td>
				<td>{movie.danhGia}</td>
				<td>
					<Button
						variant="contained"
						color="primary"
						startIcon={<DeleteIcon />}
						data-toggle="modal"
						data-target="#modelIdUserRedux"
						onClick={() => {
							this.props.deleteFilm(movie);
						}}
					/>
					<Button
						variant="contained"
						color="primary"
						startIcon={<EditIcon />}
						onClick={() => {
							this.props.EditFilm(movie);
						}}
					/>
				</td>
			</tr>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		deleteFilm: (movie) => {
			dispatch(FilmAction.ActDeleteFilmAPI(movie));
		},
		EditFilm: (movie) => {
			dispatch(FilmAction.ActEditFilmAPI(movie));
		}
	};
};
export default connect(null, mapDispatchToProps)(ListFilm);
