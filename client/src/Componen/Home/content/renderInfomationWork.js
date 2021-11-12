import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/application";
import { useHistory } from 'react-router-dom';
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
const divHight = {
  height: '256px'
};
const BackGround = {
  height: '100%',
    width: '100%'
};
const divStyleCard = {
  margin: '29px 29px',
  boxShadow: '0 4px 20px black'
};
const DivButton = {
  width: '312px'
};
 function RenderInfomationWork(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleApply=(id)=>{
    applyWork(id);
  };
  const history=useHistory();
  const checklogin=()=>{
    if(localStorage.getItem("user")){
      console.log("ok");
    }else{
      history.push("/login");
    }
  };
  let {renderInfomation,applyWork,onShowDetail} = props;
  return (
  <Card className={classes.root} style={divStyleCard}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={renderInfomation?.fromcompany?.avatar} style={divStyleImageIcon}/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={renderInfomation?.fromcompany?.name}
         subheader=  {new Date(renderInfomation?.fromcompany?.createdAt).toLocaleDateString()}
      />
      <CardContent>
        <div className="Card-content-img" style={divHight}>
          <img src={renderInfomation?.fromcompany?.avatar} style={BackGround}/>
        </div>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className="text-center"> 
            {renderInfomation.nameWork}
        </Typography>
      </CardContent>
      <CardContent>
        <Button  variant="contained" color="secondary" style={DivButton} onClick={() => {onShowDetail(renderInfomation?.id || null)}}>
          Ứng Tuyển Ngay
        </Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Yêu cầu:</Typography>
          <Typography paragraph>
              {renderInfomation.request}
          </Typography>
          <Typography paragraph>
            Mô tả công việc:
          </Typography>
          <Typography paragraph>
            {renderInfomation.description}
          </Typography>
          <Typography>
            Lương:  {renderInfomation.salary}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    applyWork: () => {
      dispatch(Action.actPostApplicationAPI());
    }
};
}
export default connect(null, mapDispatchToProps)(RenderInfomationWork)