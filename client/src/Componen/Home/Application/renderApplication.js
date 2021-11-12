import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
const divStyleImageIcon = {
    height: '40px',
    width: '42px'
};
const BackGround = {
      height: '100%',
      width: '100%'
};
const divHight = {
    height: '256px'
};
const DivButton = {
  width: '160px',
};
const LinkDiv = {
  textDecoration:'none'
};
 function RenderApplication(props) {
    const classes = useStyles();
    const {renderAplication,nameWork,onShowDetail} = props;
    console.log(nameWork)
   // console.log(renderAplication); 
    return (
        <Card className="Apply-Card">
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    <img src={renderAplication?.avatar} style={divStyleImageIcon}/>
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title = {new Date(renderAplication.createdAt).toLocaleDateString()}
                subheader=  {renderAplication?.email}
            />
            <CardContent>
                <div className="Application-Card-content-img" style={divHight}>
                    <img src={renderAplication?.avatar} style={BackGround}/>
                </div>
            </CardContent>
            <CardContent>
                <div className="Application-Card-content" >
                  <div>
                    <span>Họ và Tên: {renderAplication?.name}</span>
                 </div>
                 <div>
                    <span>Công việc ứng tuyển: {nameWork}</span>
                 </div>
                
                    <span><PhoneInTalkIcon/>{renderAplication?.phone}</span>
                </div>
            </CardContent>
            <CardContent>
                <div className="Application-Card-content" >
                <Link  
                  // to={{pathname: "/detail-user", state: {id: renderAplication?.id || null}}}
                  style={LinkDiv}
                >                  
                  <Button variant="contained" color="secondary" style={DivButton} onClick={() => {console.log(renderAplication?.id)}}>
                    Xem Hồ Sơ
                  </Button>
                </Link>
                </div>
            </CardContent>
        </Card>
    )
}
export default(RenderApplication)