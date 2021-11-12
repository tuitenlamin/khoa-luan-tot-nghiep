import React,{Component} from 'react';
import * as Action from  "../../../ShareAll/Action/userWork";
import { connect } from "react-redux";
import RenderWorkUser from './renderWorkUser';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
class WorkUser extends Component {
    componentDidMount() {
        this.props.getListWork();
    };
    renderHTML = () => {
        return this.props.listUserWork.map(render => {
            return <RenderWorkUser render={render} />;
        });
    };
    render(){   
    return (
        <TableContainer component={Paper}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                    <TableCell>Tên ứng viên</TableCell>
                    <TableCell>Tên công việc</TableCell>
                    <TableCell>Kinh nghiệm</TableCell>
                    <TableCell>Học vấn</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {this.renderHTML()}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
}

const mapStateToProp = state => {
    return {
        listUserWork: state.workUserReducer.listUserWork
    };
};  
const mapDispatchToProps = dispatch => {
    return {
        getListWork: () => {
            dispatch(Action.actGetUserWorkAdminAPI());
        }
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(WorkUser)
