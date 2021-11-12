import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RenderUserPost from './renderUserPost';
import * as Action from  "../../../ShareAll/Action/work";
import { connect } from "react-redux";
import Footer from '../Footer/footer';
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
}));
function UserPostWork (props)  {
    const classes = useStyles();
    useEffect(() => {
        props.getList();
    }, []);
    //lấy danh sách công việc trong user
    let listWork=[];
    const list= props.getListUserPostWork.reverse();
    list.forEach(element => {
        listWork.push(...element.userwork);
    });
    const nameUser=(id)=>{
        let user={} 
        const getUserByWork=props.getListUserPostWork.reverse().filter(item=> item.id===id)[0];
        let name=null;
        user={
            name:getUserByWork.name,
            avatar:getUserByWork.avatar,
            id: getUserByWork.id,
            email: getUserByWork.email,
            phone: getUserByWork.phone
        }
       
        console.log("asdasd",name)
        return user;
    };
    const renderHTML = () => {
        return listWork.reverse().map((renderUserPostWork) => {
          return <RenderUserPost renderUserPostWork={renderUserPostWork} user={nameUser(renderUserPostWork.UserWorkAccount)} />;
        });
      };
    return (
        <>
        <div className={classes.root} className="container">
            <div className="text-center">
                <h2>THÔNG TIN ỨNG VIÊN</h2>
            </div>
            <Grid container >
                {renderHTML()}
            </Grid>
        </div>
        <Footer/>
        </>
    );
}
const mapStateToProp = state => {
    return {
        getListUserPostWork: state.workReducer.getListUserPostWork
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getList: () => {
        dispatch(Action.actGetListUserPostWorkAPI());
      }
    };
};
export default connect(mapStateToProp, mapDispatchToProps)(UserPostWork);
