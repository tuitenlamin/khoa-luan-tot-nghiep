import React, { useState,useEffect } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/user";
import { makeStyles } from '@material-ui/core/styles';
import EditModel from "./editModel"
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
const divIcon = {
  marginTop: "25px",
  marginRight: "14px",
};
const divStyle = {
  marginLeft: '170px'
};
const divImg = {
    height: '132px',
    width: '135px'
};
const styleRight = {
  marginTop: '133px'
};
const divAccounIcon = {
    width: '128px',
    display: 'block',
    margin: '0 auto 10px',
    borderRadius: '8px',
    border: 'dashed 2px #ccc',
    fontSize: '100px',
    
};
const margin = {
  marginLeft: '188px'
};
const buttonSuccess = {
  marginLeft: '213px'
}
function User (props) {  
  const [modal,setModal]=useState(false);
  const {deleteUser,detailuser,getDetailUser,updateUser} = props;
  const handleClick=(id)=>{
     deleteUser(id);
  };  
  const offModal=()=>{
    setModal(false);
  };
  const handleClickEdit= (id)=>{ 
        getDetailUser(id);
        setTimeout(()=>{
          setModal(true)
        },200)
  };
  const { renderUser } = props;
      return (
          <>
            <TableRow >
              <TableCell component="th" scope="row"><img src={renderUser.avatar} style={divImg}/></TableCell>
              <TableCell >{renderUser.name}</TableCell>
              <TableCell >{renderUser.email}</TableCell>
              <TableCell >{renderUser.phone}</TableCell>
              <TableCell >{renderUser.sex}</TableCell>
              <TableCell >{renderUser.birthday}</TableCell>
              <TableCell >{renderUser.experience}</TableCell>
              <TableCell >{renderUser.skill}</TableCell>
              <TableCell >{renderUser.description}</TableCell>
              <TableCell >{renderUser.foreiginLanguage}</TableCell>
              <TableCell >{renderUser.education}</TableCell>
              <TableCell >
                  <div><Button variant="contained" color="primary" onClick={()=>handleClick(renderUser.id)} >Xóa</Button></div>
                  <div><Button variant="contained" color="primary" onClick={()=>handleClickEdit(renderUser.id)}>Sửa</Button></div>
              </TableCell>
            </TableRow>
            <EditModel modal={modal} offModal={offModal} detailuser={detailuser} getDetailUser={getDetailUser} updateUser={updateUser}/>
          </>
      )
};
const mapStateToProp = state => {
  return {
    detailuser: state.userReducer.getdetailuser
  };
};
const mapDispatchToProps = dispatch => {
    return {
      deleteUser: (id,user, cb) => {
        dispatch(Action.handleDeleteUser(id,user, cb));
      },
      getDetailUser: (id) => {
        dispatch(Action.actGetDetailUserAPI(id));
      },
      updateUser: (id,newUser,user, cb) =>{
        dispatch(Action.actUpdateUserAPI(id,newUser,user, cb))
      }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(User)