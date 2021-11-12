import React, { useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import RenderApplication from './renderApplication';
import * as Action from  "../../../ShareAll/Action/application";
import * as sendEmail from "../../../ShareAll/Action/email"
import { connect } from "react-redux";

function Application(props) {
    useEffect(() => {
        props.getListApply();
      }, []);
    const onShowDetail = (email) => {
        setTimeout(()=>{
            props.sendEmail({email});
        },200)  
    };
    // //lấy danh sách công việc trong user
    // let listApply=[];
    // let list=  !props.getListApplication[0].fromcompany ? [] : props.getListApplication[0].fromcompany ;
    // console.log(list,"list")
    // list.forEach(element => {
    //     listApply.push(...element.userapply);
    // });
    // console.log('test', props.getListApplication[0].fromcompany)
   
    // const nameWork=(id)=>(  list.filter(item=> item.id===id)[0].nameWork)

    const renderHTML = () => {
            return props.getListApplication.map(renderAplication => {
                if (renderAplication?.id && renderAplication?.userapply?.length > 0) {
                    return renderAplication.userapply.map(user => {
                        return <RenderApplication renderAplication={user} nameWork={renderAplication?.nameWork}  onShowDetail={onShowDetail}/>;
                    });
                }
                return null;
            });
    };
    return (
        <div className="container text-center">
            <h1>TOÀN BỘ HỒ SƠ ỨNG VIÊN</h1>
            <div>
            <Grid container>
                {renderHTML()} 
            </Grid>
            </div>
        </div>
    )
}

const mapStateToProp = state => {
    return {
        getListApplication: state.applicationReducer.getListApplication
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        getListApply: () => {
            dispatch(Action.actGetListWorkAPI());
        },
        sendEmail: (email) =>{
            dispatch(sendEmail.actPostEmailAPI(email));
        }
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(Application)
