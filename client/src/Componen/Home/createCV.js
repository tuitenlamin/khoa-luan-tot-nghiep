import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const divstyle = {
  paddingTop: "136px",
};
const divButton = {
  margin: "10px 20px",
};
export default class CreateCV extends Component {
  render() {
    return (
      <div className="backGround-CV  text-center" style={divstyle}>
        <h3>TẠO CV ĐỂ BẮT ĐẦU ỨNG TUYỂN</h3>
        <span>
          Có rất nhiều cơ hội làm việc cho bạn, hãy bắt đầu bằng việc tạo một cv
          thật đẹp.
        </span>
        <div className="CV-Apply">
          <Button variant="contained" color="secondary" style={divButton} >
            <Link to="/create-cv" className="Button-create">Tạo CV</Link>
          </Button>
          <Button variant="contained" color="primary" style={divButton} >
            <Link to="/list-job" className="Button-create">Tìm việc ngay</Link>
          </Button>
        </div>
      </div>
    );
  }
}
