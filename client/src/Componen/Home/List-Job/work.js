import React, { Component } from 'react';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styleButtoAplly = {
  marginLeft: '114px',
  marginTop: '6px',
  fontSize: '11px'
};
const styleLink = {
  textDecoration: 'none',
  color: 'white'
};
const divStyle={
  height: '64px'
};
export default class Work extends Component {
    render() {
        const {work, onShowDetail} = this.props;
        return (
          <div onClick={() => {console.log("test work", work);onShowDetail(work?.id)}} className="listJob-content">
                <GridListTile container key="Subheader" cols={2} style={{ height: "auto" }}>
                  <div className="work-imgage">
                    <img className="image-work-list-job" src={work?.fromcompany?.avatar}  />
                  </div>
                  <GridListTileBar
                    style={divStyle}              
                    subtitle={<span>Tên công việc: {work.nameWork}</span>}
                    title={<span>Thời gian: {new Date(work.createdAt).toLocaleDateString()}</span>}
                  />
                </GridListTile>
          </div>
        )
    }
}
