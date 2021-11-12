import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class RenderNews extends Component {
  render() {
    const { news } = this.props;
    return (
      <Grid item xs={4}>
        <Paper>
          <div className="Content-News">
            <div className="Content-company ">
              <h3>{news.name}</h3>
            </div>
            <div >
              <img src={news.avatar} className="Content-images"/>
            </div>
            <div className="Content-title">{news.title}</div>
            <div className="Content-content">{news.content}</div>
          </div>
        </Paper>
      </Grid>
    );
  }
}
