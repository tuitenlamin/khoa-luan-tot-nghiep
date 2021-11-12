import React, { useEffect } from 'react';
import RenderInfo from './renderInfo'
import { connect } from "react-redux";
import * as detailUser from  "../../../../ShareAll/Action/user";
import { useLocation } from 'react-router-dom';

function InfoDetail (props) {
  const location = useLocation();
    useEffect(() => {
      const {id} = location?.state || {};
      if (id) {
        props.getUserCV(id);
      } else {
        alert('sai')
      }
      }, []);
    const renderHTML = () => {
        return <RenderInfo renderInfo = {props.getdetailuser}/>
    }
    return (
        <div className="information-user">
            {renderHTML()}
        </div>
    );
}
const mapStateToProp = state => {
    return {
        getdetailuser: state.userReducer.getdetailuser
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getUserCV: id => {
        dispatch(detailUser.actGetDetailUserAPI(id));
      }
    };
  };
export default  connect(mapStateToProp, mapDispatchToProps)(InfoDetail);
