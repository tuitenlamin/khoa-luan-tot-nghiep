import React, { Component } from 'react'
import RednderNews from './rednderNews';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/news";
import TextField from "@material-ui/core/TextField";
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Button from "@material-ui/core/Button";
import Validator from '../../../utils/validator'
const divStyle = {
    marginLeft: '170px'
}
const divMagrin = {
    marginLeft: '595px'
}
const divButton = {
    marginRight: '25px',
    marginTop: '79px'
}
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          title: "",
          content: "",
          news: "",
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
            field: 'title',
            method: 'isEmpty',
            validWhen: false,
            message: 'Không được để trống.',
        },
        {
            field: 'title',
            method: 'isLength',
            args: [{min: 5}],
            validWhen: true,
            message: 'Bắt buộc phải từ 5 kí tự.',
        },
        {
            field: 'content',
            method: 'isEmpty',
            validWhen: false,
            message: 'Không được để trống.',
        },
        {
            field: 'content',
            method: 'isLength',
            args: [{min: 5}],
            validWhen: true,
            message: 'Bắt buộc phải từ 5 kí tự.',
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
    handleSubmit = (event) => {
		event.preventDefault();
        const {
            name,
            title,
            content,
            news,
          } = this.state;
          const params = {
            name,
            title,
            content,
            news,
          };
		this.props.createNews(params, (error, data) => {
            if (error) {
              return false;
            } else {
              this.props.createNews();
            }
          });
	};
    handleFileChange = (e) => {
        this.setState({news: e.target.files[0] || null});
    };
    renderHTML = () => {
        return this.props.listNews.map(renderNews => {
            return <RednderNews renderNews={renderNews} />;
        });
    };
    handleSubmitError = (e) => {
		this.setState({
		  errors: this.validator.validate(this.state),
		});
		console.log(this.state);
	};
    componentDidMount() {
        this.props.getNews();
    }
    render() {
        const {errors} = this.state;
        return (
        <>
            <div className="container text-center user-form">
                <form onSubmit={this.handleSubmit} action="/news" method="post" enctype="multipart/form-data">
                    <div className="userForm-Img">
                        <div><AspectRatioIcon className="userForm-Img-Icon"/></div>
                        <input type="file" name="news"  style={divStyle} onChange={this.handleFileChange}/>  
                        
                    </div>
                    <div  >
                        <div>
                        <TextField
                            id="standard-basic"
                            label="Tiêu đề"
                            onChange={this.handleOnChane}
                            name="name"
                            value={this.state.name}
                        />
                        {errors.name && <div className="validation" style={{display: 'block'}}>{errors.name}</div>}
                        </div>
                        <div>
                        <TextField
                            id="standard-basic"
                            label="Tên"
                            onChange={this.handleOnChane}
                            name="title"
                            value={this.state.title}
                        />
                        {errors.title && <div className="validation" style={{display: 'block'}}>{errors.title}</div>}
                        </div>
                        <TextField
                            id="standard-basic"
                            label="Nội dung"
                            onChange={this.handleOnChane}
                            name="content"
                            value={this.state.content}
                        /> 
                         {errors.content && <div className="validation" style={{display: 'block'}}>{errors.content}</div>}
                    </div>    
                    <div >
                    <Button variant="contained" type="submit" color="secondary" container onClick={this.handleSubmitError} >
                             Thêm Bài viết
                    </Button>
                    </div>
                </form>
            </div>
            <TableContainer component={Paper}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                    <TableCell>Hình ảnh</TableCell>
                    <TableCell>Tiêu đề</TableCell>
                    <TableCell>Tên</TableCell>
                    <TableCell>Nội dung</TableCell>
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
        listNews: state.newsReducer.listNews
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getNews: () => {
            dispatch(Action.actGetListWorkAPI());
        },
        createNews: news => {
            dispatch(Action.actCreateNewsAPI(news));
        }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(News)