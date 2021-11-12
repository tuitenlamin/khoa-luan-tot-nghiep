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
import { Link } from 'react-router-dom';
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
}
const divHight = {
    height: '256px'
}
const BackGround = {
    height: '100%',
    width: '100%'
}
const divStyleCard = {
    margin: '29px 29px',
    boxShadow: '0 4px 20px black'
}
const DivButton = {
    width: '312px'
}
const divtext = {
    textDecoration: 'none'
}
function RenderUserPost  (props)  {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    let {renderUserPostWork,user} = props;
    return (
        <Card className={classes.root} style={divStyleCard}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                <img src={user.avatar} style={divStyleImageIcon}/>
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title = {user.name}
        />
        <CardContent>
            <div className="Card-content-img" style={divHight}>
            <img src={user.avatar} style={BackGround}/>
            </div>
        </CardContent>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" className="text-center"> 
                <h4>{renderUserPostWork?.nameWork}</h4>
            </Typography>
        </CardContent>
        <CardContent>
            <span>Kinh nghiệm: {renderUserPostWork?.experience}</span>
        </CardContent>
        <CardContent>
            <Link 
             to={{pathname: "/detail-user", state: {id: user?.id || null}}}
             style={divtext}
            // to={`/detail-user?id=${renderUserPostWork.id}`} 
            // params={{test: "a"}}
            >
                <Button variant="contained" color="secondary" style={DivButton} >
                    Xem chi tiết ứng viên 
                </Button>
            </Link>
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
            <Typography paragraph>Email: {user.email}</Typography>
            <Typography paragraph>
                Số điện thoại: {user.phone}   
            </Typography>
            </CardContent>
        </Collapse>
    </Card>
    );
}

export default RenderUserPost;
