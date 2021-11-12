import React,{useEffect,useState} from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CakeIcon from '@material-ui/icons/Cake';
import WorkIcon from '@material-ui/icons/Work';
import LanguageIcon from '@material-ui/icons/Language';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import DescriptionIcon from '@material-ui/icons/Description';
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
    marginTop: "25px",
    marginRight: "14px",
};
const divStyle = {
  marginTop: '133px'
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
const Margin = {
marginLeft: '96px',
paddingBottom: '72px'
};
const buttonSuccess = {
marginLeft: '213px'
}
function EditWork(props) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const {modal,renderDetail,updateWork,offModal} = props;
    const [newRenderDetail,setNewWorkDetail]=useState({})
    useEffect(()=>{
        'name' in renderDetail && setNewWorkDetail(renderDetail)
    },[renderDetail]);
    const handleUpdate=(e)=>{
        e.preventDefault()
        let newU=newRenderDetail;
        delete newU['id'];
        updateWork(renderDetail.id,newU)
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
          <div className="Right-content">
            <form  onSubmit={handleUpdate} method="post" enctype="multipart/form-data">
            <div className="About container" style={Margin}>
            <div className="row row--35">
              <div className="Left-form col-lg-4 col-md-6 col-12" style={divStyle}>
                <div className="divInput">
                  <MailOutlineIcon style={divIcon} />
                  <TextField
                    id="standard-basic"
                    defaultValue={renderDetail.nameWork}
                    name="nameWork"
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                  />      
                </div>
                <div className="divInput">
                  <AccountCircleIcon style={divIcon} />
                  <TextField
                    id="standard-basic"
                    defaultValue={renderDetail.experience}
                    name="experience"
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                  />
                </div>
                <div className="divInput">
                  <VpnKeyIcon style={divIcon} />
                  <TextField
                    id="standard-basic"
                    defaultValue={renderDetail.education}
                    name="education"
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                  />
                </div>
              </div>
              <div className="Right-form col-lg-4 col-md-6 col-12 Right-form-user" style={styleRight} >
                <div className="divInput">
                  <ContactPhoneIcon style={divIcon} />
                  <TextField
                    id="standard-basic"
                    defaultValue={renderDetail.description}
                    name="description"
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                  />  
                </div>
                <div className="divInput">
                  <CakeIcon style={divIcon} />
                  <TextField
                    id="standard-basic"
                    defaultValue={renderDetail.request}
                    name="request"
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                  />
                </div> 
                <div className="divInput">
                  <WorkIcon style={divIcon} />
                  <TextField
                    id="standard-basic"
                    name="salary"
                    defaultValue={renderDetail.salary}
                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                  />
                </div>                  
              </div>
            </div>
            </div>
              <Button variant="contained" type="submit"  style={buttonSuccess}>Chỉnh Sửa</Button>
            </form>  
          </div>
        </div>
      </Modal>
    )
}

export default (EditWork)
