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
function EditModel(props) {
    const {modal,detailuser,updateUser,offModal} = props;
    const [newUserDetail,setNewUserDetail]=useState({})
    useEffect(()=>{
        'name' in detailuser && setNewUserDetail(detailuser)
    },[detailuser])
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const handleUpdate=(e)=>{
        e.preventDefault()
        let newU=newUserDetail;
        delete newU['id'];
        updateUser(detailuser.id,newU)
        offModal(); 
    };
    const handleChange=(name,value)=>{
        console.log(value)
      setNewUserDetail({...newUserDetail,[name]:value});
    };
    console.log(newUserDetail)
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
                <div className="About container">
                <div className="row row--35">
                  <div className="Left-form col-lg-4 col-md-6 col-12">
                  <div className="userForm-Img" style={margin}>
                      <div>
                        <AccountBoxIcon className="userForm-Img-Icon" style={divAccounIcon}/>
                      </div>
                      <input
                        type="file"
                        name="avatar"
                        sstyle={divStyle}                     
                      />
                    </div>
                    <div className="divInput">
                      <AccountCircleIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.name}
                        name="name"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />
                    </div>
                    <div className="divInput">
                      <MailOutlineIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.email}
                        name="email"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />      
                    </div>
                    <div className="divInput">
                      <AccountCircleIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.account}
                        name="account"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />
                    </div>
                    <div className="divInput">
                      <VpnKeyIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.password}
                        type="password"
                        name="password"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="Right-form col-lg-4 col-md-6 col-12 Right-form-user" style={styleRight}>
                    <div className="divInput">
                      <ContactPhoneIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.phone}
                        name="phone"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />  
                    </div>
                    <div className="divInput">
                      <CakeIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.birthday}
                        name="birthday"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />
                    </div> 
                    <div className="divInput">
                      <WorkIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        name="experience"
                        defaultValue={detailuser.experience}
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />
                    </div>           
                    <RadioGroup className="Register-form" name="sex" name="gender1" value={detailuser.sex} onChange={(e)=>handleChange(e.target.name,e.target.value)}>
                        <FormControlLabel
                          control={<Radio />}
                          label="Nam"
                          value="Nam"
                          name="sex"   
                        />
                        <FormControlLabel
                          control={<Radio />}
                          label="Nữ"
                          value="Nữ"
                          name="sex"    
                        />
                      </RadioGroup>
                  </div>
                  <div className="Right-form col-lg-4 col-md-6 col-12 Right-form-user" style={styleRight}>
                    <div className="divInput">
                      <WorkIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.skill}
                        name="skill"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />
                    </div>
                    <div className="divInput">
                      <LanguageIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.foreiginLanguage}
                        name="foreiginLanguage"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />      
                    </div> 
                    <div className="divInput">
                      <CastForEducationIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.education}
                        name="education"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />        
                    </div>           
                    <div className="divInput">
                      <DescriptionIcon style={divIcon} />
                      <TextField
                        id="standard-basic"
                        defaultValue={detailuser.description}
                        name="description"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                <RadioGroup className="Register-form" name="sex" name="gender1" value={detailuser.type} onChange={(e)=>handleChange(e.target.name,e.target.value)}>
                  <FormControlLabel
                    control={<Radio />}
                    label="Ứng Viên"
                    value="UNGVIEN"
                    name="type"    
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Nhà Quản Trị"
                    value="ADMIN"
                    name="type"    
                  />
                </RadioGroup>
                </div>
                </div>
                  <Button variant="contained" type="submit"  style={buttonSuccess}>Chỉnh Sửa</Button>
                </form>  
              </div>
            </div>
          </Modal>
    )
}

export default EditModel
