import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as ActionUserWork from  "../../../ShareAll/Action/userWork";
import EditUserWork from "./editUserWork.js";
function RenderWorkUser(props) {
    const [modal,setModal]=useState(false);
    const handleClickDeleteWork = (id) =>{
        deleUserWork(id);
    };
    const handleClickDetail = (id) =>{
        getDetailUserWork(id);
        setTimeout(()=>{
            setModal(true);
        },200)
        console.log(renderDetailUserWorkAdmin);
    };
    const offModal=()=>{
        setModal(false)
    };
    const {render,deleUserWork,renderDetailUserWorkAdmin,getDetailUserWork,newUserWork} = props;
    return (
        <>
            <TableRow >
                <TableCell >{render?.userwork?.name}</TableCell>
                <TableCell >{render.nameWork}</TableCell>
                <TableCell >{render.experience}</TableCell>
                <TableCell >{render.education}</TableCell>
                <TableCell >
                    <div><Button variant="contained" color="primary" onClick={()=>handleClickDeleteWork(render.id)}>Xóa</Button></div>
                    <div><Button variant="contained" color="primary"onClick={()=>handleClickDetail(render.id)}>Sửa</Button></div>
                </TableCell>
            </TableRow >
            <EditUserWork modal={modal} offModal={offModal} renderDetailUserWorkAdmin={renderDetailUserWorkAdmin} getDetailUserWork={getDetailUserWork} newUserWork={newUserWork}/>
        </>
    )
};
const mapStateToProp = state => {
    return {
        renderDetailUserWorkAdmin: state.workUserReducer.detailUserWorkAdmin
    };
};
const mapDispatchToProps = dispatch => {
    return {
        deleUserWork: (id) => {
        dispatch(ActionUserWork.handleDeleteUserWorkAdminAPI(id));
      },
      getDetailUserWork:(id) => {
        dispatch(ActionUserWork.actGetDetailUserWorkAdminAPI(id));
      },
      newUserWork: (id,updateUserWork) =>{
        dispatch(ActionUserWork.acthandleUpdateUserWorkAdminAPI(id,updateUserWork))
      }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(RenderWorkUser)
