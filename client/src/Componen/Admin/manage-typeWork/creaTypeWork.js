import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RenderTypeWork from './renderTypeWork';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/typework";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Validator from '../../../utils/validator'
const divStyle={
    marginBottom: '42px',
    marginLeft: '375px'
}
const divButton = {
    marginTop: '15px',
    marginLeft: '25px'
}
class CreaTypeWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleWork: "",
            errors: {},
        };
        const rules = [
            {
              field: 'titleWork',
              method: 'isEmpty',
              validWhen: false,
              message: 'Không được để trống.',
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
		this.props.createTypeWork(this.state);
	};
    componentDidMount() {
        this.props.gettypeWork();
    }
    renderHTML = () => {
        return this.props.listTypeWork.map(rendertypeWork => {
            return <RenderTypeWork rendertypeWork={rendertypeWork} />;
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
        <div className="typeWork-form" style={divStyle}>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <TextField
                        id="standard-basic"
                        label="Kiểu công việc"
                        onChange={this.handleOnChane}
                        name="titleWork"
                        value={this.state.titleWork}
                    />
                     {errors.titleWork && <div className="validation" style={{display: 'block'}}>{errors.titleWork}</div>}
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="Địa chỉ"
                        onChange={this.handleOnChane}
                        name="addressWork"
                        value={this.state.addressWork}
                    />
                     {errors.addressWork && <div className="validation" style={{display: 'block'}}>{errors.addressWork}</div>}
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="Trình độ"
                        onChange={this.handleOnChane}
                        name="levelWork"
                        value={this.state.levelWork}
                    />
                     {errors.levelWork && <div className="validation" style={{display: 'block'}}>{errors.levelWork}</div>}
                </div>
                <Button variant="contained" type="submit" color="secondary" container style={divButton} onClick={this.handleSubmitError}>
                    Thêm kiểu công việc
                </Button>
            </form>
        </div>
            <TableContainer component={Paper}>
                <Table aria-label="caption table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Loại công việc</TableCell>
                        <TableCell>Địa chỉ</TableCell>
                        <TableCell>Trình độ</TableCell>
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
        listTypeWork: state.typeworkReducer.listTypeWork
    };
};
  
const mapDispatchToProps = dispatch => {
return {
        gettypeWork: () => {
            dispatch(Action.actGetTypeListWorkAPI());
        },
        createTypeWork: ( createTypeWork,cb)=>{
            dispatch(Action.actCreateTypeWowkAdminAPI(createTypeWork,cb));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreaTypeWork)