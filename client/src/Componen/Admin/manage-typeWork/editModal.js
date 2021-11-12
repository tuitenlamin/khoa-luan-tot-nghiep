import React, { useState,useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
function EditModalType(props) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const [newTypeDetail,setDetailType]=useState({});
    const {modal,renderDetail,updateTypeWork,offModal} = props;
    useEffect(()=>{
        'name' in renderDetail && setDetailType(renderDetail)
    },[renderDetail])
    const handleUpdate=(e)=>{
        e.preventDefault()
        let newU=newTypeDetail;
        delete newU['id'];
        updateTypeWork(renderDetail.id,newU)
        offModal(); 
    };
    const handleChange=(name,value)=>{
        console.log(value)
        setDetailType({...newTypeDetail,[name]:value});
    };
    return (
        <Modal
        open={modal}
        closeAfterTransition
        disableBackdropClick={false}
        onClose={()=>offModal()}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
        >
            <div className={classes.paper}>
                <div className="Right-content">
                    <form  onSubmit={handleUpdate} method="post" enctype="multipart/form-data">
                    <div className="row row--35">
                    <div >
                        <div style={FormDiv}>
                            <div className="divInput">
                            <AccountCircleIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderDetail.titleWork}
                                name="name"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />
                            </div>
                            <div className="divInput">
                            <AccountCircleIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderDetail.addressWork}
                                name="name"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />
                            </div>
                            <div className="divInput">
                            <AccountCircleIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderDetail.levelWork}
                                name="name"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />
                            </div>
                            </div>
                        </div>
                    </div>
                    <Button variant="contained" type="submit" style={buttonSuccess}>Chỉnh Sửa</Button>
                    </form>  
                </div>
                </div>
        </Modal>
    )
};

export default (EditModalType)
