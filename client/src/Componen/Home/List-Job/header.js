import React, { useEffect } from "react";
import TypeWork from "../type-work/typeWork";
import { connect } from "react-redux";
import * as Action from "../../../ShareAll/Action/typework";
import * as actionSearch from "../../../ShareAll/Action/work";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const divtStyle = {
  padding:' 17px 132px'
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  // gridList: {
  //   width: 900,
  //   height: 1000,
  // },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));
const divStyle = {
  marginLeft: "50px",
};
const divPage = {
  marginTop: "40px",
};
function Header(props) {
  // const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    props.getTypeListWork();
  }, []);

  const renderHTML = () => {
    return props.listTypeWork.map((typeWork) => {
      return (
        <TypeWork
          typeWork={typeWork}
        />
      );
    });
  };
  return <> <div style={divtStyle}>
    <TypeWork typeWork={{titleWork: "Tất cả"}} />
    {renderHTML()}
  </div>;

   </>
}
const mapStateToProp = (state) => {
  return {
    listTypeWork: state.typeworkReducer.listTypeWork,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListWork: (search) => {
      dispatch(actionSearch.actGetListWorkAPI(search));
    },
    getTypeListWork: () => {
      dispatch(Action.actGetTypeListWorkAPI());
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Header);
