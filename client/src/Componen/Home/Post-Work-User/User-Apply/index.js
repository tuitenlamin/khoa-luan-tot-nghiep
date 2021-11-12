import React, { useEffect } from 'react';
import RenderApplied from './renderApplied';
import { connect } from "react-redux";
import * as Action from  "../../../../ShareAll/Action/user";
import Grid from "@material-ui/core/Grid";

function Applied (props) {
    useEffect(() => {
        props.getListApplied();
      }, []);
    const renderHTML = () => {
    return props.listAplliedUser.slice(-6).reverse().map((renderInfomation) => {
            return <RenderApplied renderInfomation={renderInfomation} />;
        });
    };
    return (
        <div>
            <Grid container>
                {renderHTML()}
            </Grid>         
        </div>
    );
    }
const mapStateToProp = state => {
    return {
        listAplliedUser: state.userReducer.listAplliedUser
    };
};
    
const mapDispatchToProps = dispatch => {
    return {
        getListApplied: () => {
            dispatch(Action.actGetListAppliedUserAPI());
        } 
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(Applied);
