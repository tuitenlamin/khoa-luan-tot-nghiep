import React, { useEffect }  from 'react';
import { connect } from "react-redux";
import * as Action from  "../../../../ShareAll/Action/company";
import Render from './render';

 function InfomationCompany(props) {
    useEffect(() => {
        props.getInforEmloyer();
    }, {});
    const renderHTML = () => {
        const {detailAccountCompany} = props;
        return <Render renderInfo={detailAccountCompany} />;
    };
    return (
        <div className="container">
            {renderHTML()}
        </div>
    )
};
const mapStateToProp = state => {
    return {
        detailAccountCompany: state.companyReducer.detailAccountCompany
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        getInforEmloyer: () => {
            dispatch(Action.actGetDetailCompanyAccountAPI());
        }
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(InfomationCompany)