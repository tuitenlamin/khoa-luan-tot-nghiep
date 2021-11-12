import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RenderInfomationWork from './renderInfomationWork'
import * as Action from  "../../../ShareAll/Action/work";
import * as work from "../../../ShareAll/Action/application"
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Content(props) {
const classes = useStyles();
useEffect(() => {
  props.getListWorkCompany();
}, []);
const onShowDetail = (id) => {
  props.applyWork({jobId:id});
};
const renderHTML = () => {
  return props.getWorkContent.slice(-6).reverse().map((renderInfomation) => {
    return <RenderInfomationWork renderInfomation={renderInfomation} onShowDetail={onShowDetail} />;
  });
};
return (
  <div className={classes.root} className="container">
    <div className="text-center container">
      <h2>Tin Tuyển Dụng Mới Nhất</h2>
    </div>
    <Grid container >
        {renderHTML()} 
    </Grid>
  </div>
);
}

const mapStateToProp = state => {
  return {
    getWorkContent: state.workReducer.getWorkContent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListWorkCompany: () => {
      dispatch(Action.actGetListWorkContentAPI());
    },
    applyWork: (idJob) => {
      dispatch(work.actPostApplicationAPI(idJob));
    }
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Content)