import React,{useEffect,useState} from 'react';
import TextField from "@material-ui/core/TextField";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import LanguageIcon from '@material-ui/icons/Language';
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
function EditInfoEmloyer(props) {
    const classes = useStyles();
    const rootRef = React.useRef(null);
    const {modal,renderdetailCompany,offModal,updateCompany} = props;
    const [newCompanyDetail,setCompanyDetail]=useState({});
    useEffect(()=>{
        'name' in renderdetailCompany && setCompanyDetail(renderdetailCompany)
    },[renderdetailCompany]);
    const handleUpdate=(e)=>{
        e.preventDefault()
        let newU=newCompanyDetail;
        delete newU['id'];
        updateCompany(renderdetailCompany.id,newU)
        offModal(); 
    };
    const handleChange=(name,value)=>{
        console.log(value)
        setCompanyDetail({...newCompanyDetail,[name]:value});
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
                        <form  onSubmit={handleUpdate} action="/profile" method="post" enctype="multipart/form-data">
                        <div className="About container">
                        <div className="row row--35">
                        <div className="Left-form col-lg-4 col-md-6 col-12">
                            <div className="divInput">
                            <AccountCircleIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderdetailCompany.name}
                                name="name"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />
                            </div>
                            <div className="divInput">
                            <MailOutlineIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderdetailCompany.email}
                                name="email"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />      
                            </div>
                            <div className="divInput">
                            <AccountCircleIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderdetailCompany.account}
                                name="account"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />
                            </div>
                            <div className="divInput">
                            <VpnKeyIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderdetailCompany.password}
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
                                defaultValue={renderdetailCompany.numberPhone}
                                name="numberPhone"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />  
                            </div> 
                            <div className="divInput">
                            <HomeIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                name="address"
                                defaultValue={renderdetailCompany.address}
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />
                            </div>  
                            <div className="divInput">
                            <WorkIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderdetailCompany.webstie}
                                name="webstie"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}
                            />
                            </div>
                            <div className="divInput">
                            <LanguageIcon style={divIcon} />
                            <TextField
                                id="standard-basic"
                                defaultValue={renderdetailCompany.nation}
                                name="nation"
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

export default (EditInfoEmloyer)
