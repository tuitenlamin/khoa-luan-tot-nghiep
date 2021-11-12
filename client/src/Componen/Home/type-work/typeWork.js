import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const divstyle = {
  margin: "20px 10px",
};
const text={
  textDecoration: 'none'
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));
export default function TypeWork (props) {
  const classes = useStyles();
  const { typeWork,index} = props;

    return (
      <>
      <div className="container">
          <div className="row row--35">
              <div className="col-lg-4 col-md-6 col-12">
                <Link style= {text} to={{pathname: "/list-job", state: {search: typeWork.titleWork === "Tất cả" ? "" : typeWork.titleWork}}}>
                  <Button variant="contained" style={divstyle}>
                    {typeWork.titleWork}
                  </Button>
                </Link>
                
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                  <Link style= {text} to={{pathname: "/list-job", state: {search: typeWork.addressWork === "Địa chỉ" ? "" : typeWork.addressWork}}}>
                    <Button variant="contained" style={divstyle} color="primary">
                      {typeWork.addressWork}
                    </Button>
                  </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                  <Link style= {text} to={{pathname: "/list-job", state: {search: typeWork.levelWork === "Kinh nghiệm" ? "" : typeWork.levelWork}}}>
                    <Button variant="contained" style={divstyle} color="secondary">
                      {typeWork.levelWork}
                    </Button>
                  </Link>
              </div>
          </div>
      </div>
      </>
    );
}