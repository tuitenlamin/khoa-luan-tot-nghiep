import React, { useState } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/news";
import EditNews from './editNews';
const divImg = {
    height: '132px'
};
function RednderNews (props) {
    const [modal,setModal]=useState(false);
    let [detail,setDetail]=useState({});
    const { renderNews,deleteNews,getDetailNews,renderDetailNews,newNews } = props;
    const handleClickDelete = (id) =>{
        deleteNews(id)
    };
    const handleClickDetail = (id) =>{
        getDetailNews(id);
        setTimeout(()=>{
            setModal(true)
        },200)
        console.log(renderDetailNews);
    };
    const offModal=()=>{
        setModal(false)
    };
        return (
            <>
                <TableRow >
                    <TableCell component="th" scope="row"><img src={renderNews.avatar} style={divImg}/></TableCell>
                    <TableCell >{renderNews.name}</TableCell>
                    <TableCell >{renderNews.title}</TableCell>
                    <TableCell >{renderNews.content}</TableCell>
                    <TableCell >
                        <Button variant="contained" color="primary"onClick={()=>handleClickDelete(renderNews.id)}>Xóa</Button>
                        <Button variant="contained" color="primary"onClick={()=>handleClickDetail(renderNews.id)}>Sửa</Button>
                    </TableCell>
                </TableRow>
                <EditNews modal={modal} offModal={offModal} renderDetailNews={renderDetailNews} getDetailNews={getDetailNews} newNews={newNews}/>
            </>
        )
    };
const mapStateToProp = state => {
    return {
        renderDetailNews: state.newsReducer.detailNews
    };
};
const mapDispatchToProps = dispatch => {
    return {
      deleteNews: (id) => {
        dispatch(Action.handleDeleteNewsAPI(id));
      },
      getDetailNews:(id) => {
        dispatch(Action.actGetDetailNewsAPI(id));
      },
      newNews: (id,updateNews) =>{
        dispatch(Action.handleUpdateNewsAPI(id,updateNews))
      }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(RednderNews)
