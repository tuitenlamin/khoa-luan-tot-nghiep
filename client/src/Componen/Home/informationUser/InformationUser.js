import React, { useEffect }  from "react";
import RenderInforUser from './renderInforUser';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/fileCV";
import WorkUser from '../Post-Work-User/workUser'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditUser from './Edit-User/editUser';
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
function InformationUser(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    props.getUserCV();
  }, []);
  const renderHTML = () => {
      const {getInfoCvUser} =  props;
      return <RenderInforUser renderInfoUserCV = {getInfoCvUser}/>
  };
  return (
    <div className=" information-user">
      <div className={classes.root} className="About-infor">
            <AppBar position="static" className="About-AppBar-infor" container>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Đăng Bài" {...a11yProps(0)} className="app-Info-Item"/>
                  <Tab label="Hồ Sơ" {...a11yProps(1)} className="app-Info-Item"/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <WorkUser/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {renderHTML()}
            </TabPanel>
      </div>
    </div>
  );
}

const mapStateToProp = state => {
  return {
    getInfoCvUser: state.AccountCvReducer.getInfoCvUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserCV: () => {
      dispatch(Action.actGetCvAccountAPI());
    }
  };
};
export default connect(mapStateToProp, mapDispatchToProps) (InformationUser)