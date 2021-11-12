import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BusinessIcon from '@material-ui/icons/Business';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PublicIcon from '@material-ui/icons/Public';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Button from '@material-ui/core/Button';

 function RenderDetailWork (props) {
  const { deitalWork,onShowDetail } = props;
  return (
   <>
    <Grid container>
      <div className="containerd">
        <div className="DetailWork-Company">
            <div className="DetailWork-Company-Img">
                <img src={deitalWork?.fromcompany?.avatar}/>
                <div>
                  <h3>{deitalWork.name}</h3>
                </div>
                <div className="DetailWork-Company-Item-Left">
                  <div className="Item">
                    <BusinessIcon/> Địa Chỉ: {deitalWork?.fromcompany?.address}
                  </div>
                  <div className="Item">
                      <LanguageIcon/> Website: {deitalWork?.fromcompany?.webstie}
                  </div>
                  <div className="Item">
                      <MailOutlineIcon/> Email: {deitalWork?.fromcompany?.email}
                  </div>
                </div>
                <div className="DetailWork-Company-Item-right">
                  <div className="Item">
                    <PublicIcon/> Quốc gia:  {deitalWork?.fromcompany?.nation}
                  </div>
                  <div className="Item">
                      <ContactPhoneIcon/> Số điện thoại: {deitalWork?.fromcompany?.numberPhone}
                  </div>
                </div>
            </div>
        </div>
      </div>
    </Grid>
    <hr/>
    <Grid>
      <div className="DetailWork-Work">
        <div className="DetailWork-Work-content">
            <div className="DetailWork-Work-nameWork">
                <h3>{deitalWork.nameWork}</h3>
            </div>
            <div className="DetailWork-Work-description">
                <span>Mô tả công việc: {deitalWork.description}</span>
            </div>
            <div className="DetailWork-Work-experience">
                <span>Kinh nghiệm: {deitalWork.experience}</span>
            </div>
            <div className="DetailWork-Work-request">
                <span>Yêu cầu : {deitalWork.request}</span>
            </div>
            <div className="DetailWork-Work-request">
                <span>Level : {deitalWork.levelWork}</span>
            </div>
            <div className="DetailWork-Work-education">
                <span>Học vấn: {deitalWork.education}</span>
            </div>
            <div className="DetailWork-Work-salary">
                <span>Lương: {deitalWork.salary}</span>
            </div>
            <div className="Deatil-Work-Apply">
              <Button variant="contained" color="secondary" onClick={() => onShowDetail(deitalWork?.id)}>
                Ứng Tuyển
              </Button>
            </div>
        </div>
      </div>
    </Grid>
   </>
  );
  }


  export default (RenderDetailWork)
