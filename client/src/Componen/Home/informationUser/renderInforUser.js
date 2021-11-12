import React,{useState} from 'react'
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/user";
import EditUserFilveCV from './Edit-User/editUser'
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.any.isRequired,
value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}
  
const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
},
}));

 function RenderInforUser(props) {
    const {renderInfoUserCV,getDetailFileCV,detailFileCv,updateUser} = props;
    const [modal,setModal]=useState(false);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const offModal=()=>{
        setModal(false);
    };
    const handleClickEdit= (id)=>{ 
        getDetailFileCV(id);
        setTimeout(()=>{
          setModal(true)
        },200)
    };
    return (
    <>
    <div className="container">
        <div className="row">
            <Button variant="contained" color="secondary" onClick={()=>handleClickEdit(renderInfoUserCV.id)}>Chỉnh sửa</Button>  
        </div>
    </div>
    <div className="Protofile">
        <Grid item xs={12} container >            
            <div className="container">
                <div className="row">
                    <div className="Info-left">
                        <div className="Info-left-item col-lg-5">
                            <span>Chào Mừng Bạn Đến Với Tôi</span>
                            <h2>{renderInfoUserCV?.name || ""}</h2>
                            <div>
                                <p>{renderInfoUserCV?.skill || ""}</p>
                            </div>
                            <div>
                                <p>{renderInfoUserCV?.email || ""}</p>
                            </div>
                        </div>
                        <div className="Info-right-item col-lg-7 mt_md--40 mt_sm--40">
                            <div className="Info-right-item-Img">
                                <img src={renderInfoUserCV?.avatar || ""}/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </Grid>
        <div className="About container">
            <div className="row row--35">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="About-Item">
                            <div className='About-right-div-name'>
                                <span>Thông tin cá nhân</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Họ và tên: {renderInfoUserCV?.name}</span>
                            </div>
                            <div className='About-right-div'> 
                                <span>Số điện thoại: {renderInfoUserCV?.phone}</span>
                            </div>
                            {/* <div className='About-right-div'>
                                <span>Địa chỉ: {renderInfoUserCV?.nation}</span>
                            </div> */}
                            <div className='About-right-div'>
                                <span>Ngày sinh: {renderInfoUserCV?.birthday}</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Học vấn: {renderInfoUserCV?.education}</span>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="About-Item">
                        <div className='About-right-div-name'>
                            <span>Kĩ năng cá nhân</span>
                        </div>
                        <div className='About-right-div'>
                            <span>{renderInfoUserCV?.skill}</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="About-Item">
                        <div className='About-right-div-name'>
                            <span>Giới thiệu bản thân</span>
                        </div>
                        <div className='About-right-div'>
                            <span>{renderInfoUserCV?.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <EditUserFilveCV modal={modal} offModal={offModal} detailFileCv={detailFileCv} updateUser={updateUser}/>     
    </>
    )
}
const mapStateToProp = state => {
    return {
      detailFileCv: state.userReducer.getdetailuser
    };
};
const mapDispatchToProps = dispatch => {
    return {
    getDetailFileCV: (id) => {
        dispatch(Action.actGetDetailUserAPI(id));
    },
    updateUser: (id,newUser) =>{
        dispatch(Action.actUpdateUserAPI(id,newUser))
    }
};
}
export default connect(mapStateToProp, mapDispatchToProps) (RenderInforUser) 