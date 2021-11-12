import React, { Component } from 'react';
import RenderWork from './renderWork';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/work";
import * as company from  "../../../ShareAll/Action/company";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Company from './company'
import Validator from '../../../utils/validator'
 class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nameWork: "",
          experience: "",
          education: "",
          description: "",
          request: "",
          salary: "",
          errors: {},
        };
        const rules = [
            {
              field: 'nameWork',
              method: 'isEmpty',
              validWhen: false,
              message: 'Không được để trống.',
            },
            {
              field: 'nameWork',
              method: 'isLength',
              args: [{min: 5}],
              validWhen: true,
              message: 'Bắt buộc phải từ 5 kí tự.',
            },
            {
              field: 'experience',
              method: 'isEmpty',
              validWhen: false,
              message: 'Không được để trống.',
            },
            {
              field: 'experience',
              method: 'isLength',
              args: [{min: 5}],
              validWhen: true,
              message: 'Bắt buộc phải từ 5 kí tự.',
            },
            {
                field: 'education',
                method: 'isEmpty',
                validWhen: false,
                message: 'Không được để trống.',
            },
            {
                field: 'education',
                method: 'isLength',
                args: [{min: 5}],
                validWhen: true,
                message: 'Bắt buộc phải từ 5 kí tự.',
            },
            {
                field: 'description',
                method: 'isEmpty',
                validWhen: false,
                message: 'Không được để trống.',
            },
            {
                field: 'description',
                method: 'isLength',
                args: [{min: 5}],
                validWhen: true,
                message: 'Bắt buộc phải từ 5 kí tự.',
            },
            {
                field: 'request',
                method: 'isEmpty',
                validWhen: false,
                message: 'Không được để trống.',
            },
            {
                field: 'request',
                method: 'isLength',
                args: [{min: 5}],
                validWhen: true,
                message: 'Bắt buộc phải từ 5 kí tự.',
            },
            {
                field: 'salary',
                method: 'isEmpty',
                validWhen: false,
                message: 'Không được để trống.',
            },
            {
                field: 'salary',
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
		this.props.createCompany(this.state);
	};
    componentDidMount() {
        this.props.getWork();
        this.props.getCompany();
    }
    handleSubmitError = (e) => {
        this.setState({
          errors: this.validator.validate(this.state),
        });
        console.log(this.state);
    };
    renderHTML = () => {
        return this.props.getlistworkcompany.map(renderWork => {
            return <RenderWork renderWork={renderWork} />;
        });
    };
    renderItem = () => {
        return this.props.getListCompany.map(render => {
            return <Company render={render} />;
        });
    };
    render() {
        const {errors} = this.state;
        return (
        <>
        <TableContainer component={Paper}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                    <TableCell>Công ty</TableCell>
                    <TableCell>Tên công việc</TableCell>
                    <TableCell>Kinh nghiệm</TableCell>
                    <TableCell>Học vấn</TableCell>
                    <TableCell>Mô tả công việc</TableCell>
                    <TableCell>Yêu cầu</TableCell>
                    <TableCell>Lương</TableCell>
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
        getListCompany: state.companyReducer.getListCompany,
        getlistworkcompany: state.workReducer.getlistworkcompany
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        getWork: () => {
            dispatch(Action.actGetListWorkCompanyAPI());
        },
        getCompany: () => {
            dispatch(company.actGetListCompanyAPI());
        },
        createCompany: createCopany => {
            dispatch(Action.actCreateWorkEmployer(createCopany));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Work)