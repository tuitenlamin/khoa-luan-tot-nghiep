import React, { Component } from 'react';
import ListFilm from './ListFilm';
import { connect } from 'react-redux';
import * as action from '../../../../ShareALL/action';
import Table from 'react-bootstrap/Table';


class FilmMang extends Component {
	componentDidMount() {
		document.title = 'List Movie';
		this.props.getListMovie();
	}

	renderHTML = () => {
		return this.props.listMovie.map((movie) => {
			return <ListFilm key={movie.maPhim} movie={movie} 
			/>;
		});
	};

	render() {
		return (
			<>	
			<div>
				<Table striped bordered hover responsive="sm" responsive="md" responsive="lg" responsive="xl">
					<thead>
						<tr>
							<th>Mã Phim</th>
							<th>Tên Phim</th>
							<th>Bí Danh</th>
							<th>Trailer</th>
							<th>Hình Ảnh</th>
							<th>Mô Tả</th>
							<th>Mã Nhóm</th>
							<th>Ngày Khởi Chiếu</th>
							<th>Đánh Giá</th>
						</tr>
					</thead>
					<tbody>{this.renderHTML()}</tbody>
				</Table>
			</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		listMovie: state.movieReducer.listMovie
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getListMovie: () => {
			dispatch(action.actGetListMovieAPI());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmMang);
