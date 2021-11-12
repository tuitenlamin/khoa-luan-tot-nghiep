import React, { useState } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/work";
import EditWork from './editWork';
function RenderWork (props) {
    const [modal,setModal]=useState(false);
    const handleClick=(id)=>{
        const {deleteWork} = props;
        deleteWork(id);
    };
    const offModal=()=>{
        setModal(false);
    };
    const handleClickUpdate = (id) => {
        getDetailWork(id);
        setTimeout(()=>{
            setModal(true)
          },200)
    }
    const { renderWork,renderDetail,getDetailWork,updateWork } = props;
        return (
            <>
                <TableRow >
                    <TableCell >{renderWork?.fromcompany?.name}</TableCell>
                    <TableCell >{renderWork.nameWork}</TableCell>
                    <TableCell >{renderWork.experience}</TableCell>
                    <TableCell >{renderWork.education}</TableCell>
                    <TableCell >{renderWork.description}</TableCell>
                    <TableCell >{renderWork.request}</TableCell>
                    <TableCell >{renderWork.salary}</TableCell>
                    <TableCell >
                        <div><Button variant="contained" color="primary" onClick={()=>handleClick(renderWork.id)}>Xóa</Button></div>
                        <div><Button variant="contained" color="primary" onClick={()=>handleClickUpdate(renderWork.id)}>Sửa</Button></div>
                    </TableCell>
                </TableRow >
                <EditWork modal={modal} offModal={offModal} renderDetail={renderDetail} getDetailWork={getDetailWork} updateWork={updateWork}/>
            </>
        )
    }
const mapStateToProp = state => {
    return {
      renderDetail: state.workReducer.detailUpdateWork
    };
};
const mapDispatchToProps = dispatch => {
    return {
        deleteWork: (id) => {
            dispatch(Action.handleDeleteWork(id));
        },
        getDetailWork: (id) => {
            dispatch(Action.actDetailUpdateWorkAPI(id));
        },
        updateWork: (id,updateWork) =>{
            dispatch(Action.handleUpdateWork(id,updateWork))
        }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(RenderWork)