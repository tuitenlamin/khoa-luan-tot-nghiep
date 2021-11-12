import React, {useEffect,useState} from 'react';
import TextField from "@material-ui/core/TextField";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ExplicitIcon from '@material-ui/icons/Explicit';
import Modal from '@material-ui/core/Modal';
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
const divIcon = {
    marginTop: "16px",
    marginRight: "14px",
};
const edituserWork = {
marginLeft: '150px'
};
const buttonSuccess = {
marginLeft: '213px'
}
function EditRender(props) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const {modal,renderDetail,offModal,update} = props;
    const [newRenderDetail,setNewWorkDetail]=useState({});
    useEffect(()=>{
        'name' in renderDetail && setNewWorkDetail(renderDetail)
    },[renderDetail]);
    const handleUpdate=(e)=>{
        e.preventDefault()
        let newU=newRenderDetail;
        delete newU['id'];
        update(renderDetail.id,newU)
        offModal(); 
    };
    const handleChange=(name,value)=>{
        console.log(value)
        setNewWorkDetail({...newRenderDetail,[name]:value});
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
                <div >
                    <form  onSubmit={handleUpdate} action="/profile" method="post" enctype="multipart/form-data">
                    <div className="container edituserWork" style={edituserWork}>
                        <div className="divInput">
                        <WorkIcon style={divIcon} />
                        <TextField
                            id="standard-basic"
                            defaultValue={renderDetail.nameWork}
                            name="nameWork"
                            onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        />
                        </div>
                        <div className="divInput">
                        <ExplicitIcon style={divIcon} />
                        <TextField
                            id="standard-basic"
                            defaultValue={renderDetail.experience}
                            name="experience"
                            onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        />      
                        </div>
                        <div className="divInput">
                        <CastForEducationIcon style={divIcon} />
                        <TextField
                            id="standard-basic"
                            defaultValue={renderDetail.education}
                            name="education"
                            onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        />
                        </div>    
                    </div>
                        <Button variant="contained" type="submit" style={buttonSuccess}>Chỉnh Sửa</Button>
                    </form>  
                </div>
            </div>
        </Modal>
    )
}

export default (EditRender)
