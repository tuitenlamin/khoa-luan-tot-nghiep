import React, { useEffect } from "react";
import TypeWork from "./typeWork";
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/typework";
const divstyle = {
  margin: "0px 10px",
};
const divInput = 
{
  margin: '40px 0px'
}
const styleInput ={
    width: '1297px',
    textAlign: 'center',
    height: '43px',
    border: '1px solid gray',
    borderRadius: '7px'
};

function SeacrchJob (props) {
  useEffect(() => {
    props.getListWork();
  }, []);
  const renderHTML = () => {
    return props.listTypeWork.map(typeWork => {
      return <TypeWork typeWork={typeWork} />;
    });
  };
    return (
      <div className="container">
        <div>
          {renderHTML()}
        </div>
      </div>
    );
  }

  const mapStateToProp = state => {
    return {
      listTypeWork: state.typeworkReducer.listTypeWork
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getListWork: () => {
        dispatch(Action.actGetTypeListWorkAPI());
      }
    };
  };
  
export default connect(mapStateToProp, mapDispatchToProps) (SeacrchJob)