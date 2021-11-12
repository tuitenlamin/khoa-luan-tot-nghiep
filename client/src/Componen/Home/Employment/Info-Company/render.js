import React,{useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as Action from  "../../../../ShareAll/Action/company";
import EditInfoEmloyer from '../edit/editInfoEmloyer';
import { makeStyles } from '@material-ui/core/styles';
function Render (props) {
    const [modal,setModal]=useState(false);
    const handleClickDetail = (id) =>{
        getDetailCompany(id);
        setTimeout(()=>{
            setModal(true);
        },200)
        console.log(renderdetailCompany);
    };
    const offModal=()=>{
        setModal(false)
    };
    const {renderInfo,getDetailCompany,renderdetailCompany,updateCompany} = props;
    return (
        <>
        <div className="container">
                <div className="row">
                    <Button variant="contained" color="secondary" onClick={()=>handleClickDetail(renderInfo.id)}>Chỉnh sửa</Button>  
                </div>
            </div>
        <div className="renderInfoCompany">
            <Grid item xs={12} container >            
                <div className="container">
                    <div className="row">
                        <div className="Info-left">
                            <div className="Info-left-item col-lg-5">
                                <span>THÔNG TIN CÔNG TY</span>
                                <h2>{renderInfo?.name}</h2>
                                <span>Email:{renderInfo?.email}</span>
                                <span>Website: {renderInfo?.webstie}</span>
                                <span>Số điện thoại: {renderInfo?.numberPhone} </span>
                                <span>Quốc gia: {renderInfo?.nation} </span>
                                <span>Địa chỉ: {renderInfo?.address} </span>    
                            </div>
                            <div className="Info-right-item col-lg-7 mt_md--40 mt_sm--40">
                                <div className="Info-right-item-Img">
                                    <img src={renderInfo?.avatar}/>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </Grid>       
        </div>
        <EditInfoEmloyer   modal={modal} offModal={offModal} renderdetailCompany={renderdetailCompany} getDetailCompany={getDetailCompany} updateCompany={updateCompany} />
        </>
    );
};
const mapStateToProp = state => {
    return {
        renderdetailCompany: state.companyReducer.getdetailCompany
    };
};
const mapDispatchToProps = dispatch => {
    return {
      getDetailCompany:(id) => {
        dispatch(Action.actGetDetailCompanyAPI(id));
      },
      updateCompany: (id,newCom) =>{
        dispatch(Action.handleUpdateCompany(id,newCom))
      }
  };
}

export default connect(mapStateToProp, mapDispatchToProps)(Render);
