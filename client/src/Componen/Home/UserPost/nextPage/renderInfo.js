import React from 'react';
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
function RenderInfo (props)  {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {renderInfo} = props;
    return (
        <>
        <div className="Protofile">
        <Grid item xs={12} container >            
            <div className="container">
                <div className="row">
                    <div className="Info-left">
                        <div className="Info-left-item col-lg-5">
                            <span>Chào Mừng Bạn Đến Với Tôi</span>
                            <h2>{renderInfo?.name || ""}</h2>
                            <div>
                                <p>{renderInfo?.skill || ""}</p>
                            </div>
                        </div>
                        <div className="Info-right-item col-lg-7 mt_md--40 mt_sm--40">
                            <div className="Info-right-item-Img">
                                <img src={renderInfo?.avatar || ""}/>
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
                                <span>Họ và tên: {renderInfo?.name}</span>
                            </div>
                            <div className='About-right-div'> 
                                <span>Số điện thoại: {renderInfo?.phone}</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Địa chỉ: {renderInfo?.nation}</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Ngày sinh: {renderInfo?.birthday}</span>
                            </div>
                            <div className='About-right-div'>
                                <span>Học vấn: {renderInfo?.education}</span>
                            </div>
                        </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="About-Item">
                        <div className='About-right-div-name'>
                            <span>Kĩ năng cá nhân</span>
                        </div>
                        <div className='About-right-div'>
                            <span>Học vấn: {renderInfo?.skill}</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="About-Item">
                        <div className='About-right-div-name'>
                            <span>Kĩ năng cá nhân</span>
                        </div>
                        <div className='About-right-div'>
                            <span>Học vấn: {renderInfo?.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>       
        </>
    );
}

export default RenderInfo;
