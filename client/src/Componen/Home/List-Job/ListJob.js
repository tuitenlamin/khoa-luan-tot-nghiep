import React, { useState, useEffect, useMemo, useRef }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Work from "./work";
import * as Action from  "../../../ShareAll/Action/work";
import { connect } from "react-redux";
import DetailWork from "./detail-work/detailWork"
import Header from './header';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/footer';
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
 function ListJob(props) {
  const classes = useStyles();
  const {listWork} = props;
  const location = useLocation();
  const [workID, setWorkID] = useState(0);

  const _listWork = useMemo(() => [...listWork].reverse(), [listWork]);

  const loadListWork = () => {
    const search = location?.state?.search || "";
    props.getListWork(encodeURIComponent(search));
  };

  useEffect(() => {
    loadListWork();
  }, []);

  useEffect(() => {
    loadListWork();
  }, [location?.state]);
  
  const showDetail = (id) => {
    if (!id) return false;
    setWorkID(id);
  };
  return (
    <>
    <div className="container List-Job" style={divPage}>
      <Header/>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList} container>
              {_listWork && _listWork.map(work => {
                return <Work work={work} key={work.id} onShowDetail={showDetail}/>;
              })}
            </GridList>
          </div>
        </Grid>
        <Grid item xs={5} style={divStyle}>
          <Paper className={classes.paper}>
            <div className="Content text-center">
            <Grid container>
                {workID && <DetailWork WorkID={workID}/>}
            </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
    <Footer/>
    </>
  );
}

const mapStateToProp = state => {
  return {
    listWork: state.workReducer.listWork
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListWork: (search) => {
      dispatch(Action.actGetListWorkAPI(search));
    }
  };
};



export default connect(mapStateToProp, mapDispatchToProps)(ListJob)