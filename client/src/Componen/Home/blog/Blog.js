import React, { useEffect }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import * as Action from  "../../../ShareAll/Action/news";
import { connect } from "react-redux";
import RenderNews from './renderNews';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1,
    // },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));


 function Blog(props) {
  const classes = useStyles();
  useEffect(() => {
    props.getListNews();
  }, []);
  const renderHTML = () => {
    return props.listNews.slice(-3).reverse().map(news => {
      return <RenderNews news={news} />;
    });
  };
  return (
    <div className={classes.root} className="container" >
      <div className="text-center container">
        <h2>TIN TỨC MỚI</h2>
      </div>
      <Grid container>
        {renderHTML()}
      </Grid>
    </div>
  );
}

const mapStateToProp = state => {
  return {
    listNews: state.newsReducer.listNews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListNews: () => {
      dispatch(Action.actGetListWorkAPI());
    }
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Blog)