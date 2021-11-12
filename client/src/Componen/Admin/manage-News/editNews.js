import React,{useEffect,useState} from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
const divIcon = {
    marginTop: "25px",
    marginRight: "14px",
};
const styleRight = {
marginLeft: '234px'
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
    marginLeft: '16px'
};
const buttonSuccess = {
marginLeft: '213px'
};
const FormDiv = {
    marginLeft: '150px'
};
function EditNews(props) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const {modal,renderDetailNews,newNews,offModal} = props;
    const [newUserDetail,setNewUserDetail]=useState({});
    const handleUpdate=(e)=>{
        e.preventDefault()
        let newU=newUserDetail;
        delete newU['id'];
        newNews(renderDetailNews.id,newU)
        offModal(); 
    };
    const handleChange=(name,value)=>{
      setNewUserDetail({...newUserDetail,[name]:value});
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
                        <form onSubmit={handleUpdate} action="/profile" method="post" enctype="multipart/form-data">
                        <div className="row row--35">
                        <div >
                        <div className="userForm-Img" style={margin}>
                            <div>
                                <AccountBoxIcon className="userForm-Img-Icon" style={divAccounIcon}/>
                            </div>
                            <input
                                type="file"
                                name="news"
                                style={styleRight}                     
                            />
                            </div>
                            <div style={FormDiv}>
                                <div className="divInput">
                                <AccountCircleIcon style={divIcon} />
                                <TextField
                                    id="standard-basic"
                                    defaultValue={renderDetailNews.name}
                                    name="name"
                                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                />
                                </div>
                                <div className="divInput">
                                <MailOutlineIcon style={divIcon} />
                                <TextField
                                    id="standard-basic"
                                    defaultValue={renderDetailNews.title}
                                    name="title"
                                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                />      
                                </div>
                                <div className="divInput">
                                <AccountCircleIcon style={divIcon} />
                                <TextField
                                    id="standard-basic"
                                    defaultValue={renderDetailNews.content}
                                    name="content"
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
}

export default (EditNews)
