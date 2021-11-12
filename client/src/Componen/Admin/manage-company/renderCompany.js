import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/company";
import { makeStyles } from '@material-ui/core/styles';
import EditCompany from './editCompany'
const divImg = {
    height: '132px'
};
const divIcon = {
    marginTop: "25px",
    marginRight: "14px",
};
const divStyle = {
marginLeft: '170px'
};
const styleRight = {
marginTop: '133px',
marginLeft: '146px'
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
function RenderCompany (props) {
    const [modal,setModal]=useState(false);
    let [detail,setDetail]=useState({});
    const handleClick=(id)=>{
        const {deleteCompany} = props;
        deleteCompany(id);
    };
    const handleClickDetail = (id) =>{
        getDetailCompany(id);
        setTimeout(()=>{
            setModal(true);
        },200)
        console.log(renderdetailCompany);
    };
    const offModal=()=>{
        setModal(false)
    };
    const { rendercompany,getDetailCompany,renderdetailCompany,updateCompany } = props;
        return (
            <>
            <TableRow >
                <TableCell component="th" scope="row"><img src={rendercompany.avatar} style={divImg}/></TableCell>
                <TableCell >{rendercompany.name}</TableCell>
                <TableCell >{rendercompany.address}</TableCell>
                <TableCell >{rendercompany.nation}</TableCell>
                <TableCell >{rendercompany.webstie}</TableCell>
                <TableCell >{rendercompany.email}</TableCell>
                <TableCell >{rendercompany.numberPhone}</TableCell>
                <TableCell >
                    <div><Button variant="contained" color="primary" onClick={()=>handleClick(rendercompany.id)}>Xóa</Button></div>
                    <div><Button variant="contained" color="primary" onClick={()=>handleClickDetail(rendercompany.id)}>Sửa</Button></div>
                </TableCell>
            </TableRow>
            <EditCompany   modal={modal} offModal={offModal} renderdetailCompany={renderdetailCompany} getDetailCompany={getDetailCompany} updateCompany={updateCompany} />
            </>
        )
}
const mapStateToProp = state => {
    return {
        renderdetailCompany: state.companyReducer.getdetailCompany
    };
};
const mapDispatchToProps = dispatch => {
    return {
      deleteCompany: (id) => {
        dispatch(Action.handleDeleteCompany(id));
      },
      getDetailCompany:(id) => {
        dispatch(Action.actGetDetailCompanyAPI(id));
      },
      updateCompany: (id,newCom) =>{
        dispatch(Action.handleUpdateCompany(id,newCom))
      }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(RenderCompany)