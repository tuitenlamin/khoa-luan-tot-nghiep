import React, { useState,useEffect } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/typework";
import EditModalType from './editModal';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      height: 300,
      flexGrow: 1,
      minWidth: 300,
      transform: 'translateZ(0)',
      // The position fixed scoping doesn't work in IE 11.
      // Disable this demo to preserve the others.
      '@media all and (-ms-high-contrast: none)': {
        display: 'none',
      },
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: 636,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
const buttonSuccess = {
    marginLeft: '213px'
};
const divIcon = {
    marginTop: "25px",
    marginRight: "14px",
};
const FormDiv = {
    marginLeft: '150px'
}
function RenderTypeWork (props) {
    const [modal,setModal]=useState(false);
    const classes = useStyles();
    const rootRef = React.useRef(null);
    let [detail,setDetail]=useState({});
    const [newTypeDetail,setDetailType]=useState({});

    const offModal=()=>{
        setModal(false)
    }
    const handleClick=(id)=>{
        const {deleteTypeWork} =props;
        deleteTypeWork(id);
    };
    const handleClickUpdate =(id)=>{
        getRenderDetail(id);
        setTimeout(()=>{
            setModal(true);
        },200)
        console.log(renderDetail);
    };
    const { rendertypeWork,renderDetail,getRenderDetail,updateTypeWork } = props;
        return (
            <>
            <TableRow >
                <TableCell >{rendertypeWork.titleWork}</TableCell>
                <TableCell >{rendertypeWork.addressWork}</TableCell>
                <TableCell >{rendertypeWork.levelWork}</TableCell>
                <TableCell >
                    <Button variant="contained" color="primary" onClick={()=>handleClick(rendertypeWork.id)}>Xóa</Button>
                    <Button variant="contained" color="primary"onClick={()=>handleClickUpdate(rendertypeWork.id)}>Sửa</Button>
                </TableCell>
            </TableRow>
            <EditModalType modal={modal} offModal={offModal} updateTypeWork ={updateTypeWork} renderDetail={renderDetail} getRenderDetail={getRenderDetail}/>
            </>
        )
    }
const mapStateToProp = state => {
    return {
        renderDetail: state.typeworkReducer.detailType
    };
};
const mapDispatchToProps = dispatch => {
    return {
        deleteTypeWork: (id) => {
            dispatch(Action.handleDeleteTypeWork(id));
      },
      getRenderDetail:(id) => {
        dispatch(Action.actGetDetailTypeWorkAPI(id))
      },
      updateTypeWork: (id,newType) =>{
        dispatch(Action.handleUpdateTypeWork(id,newType))
      }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(RenderTypeWork)
