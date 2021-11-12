import React , {useMemo,useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/userWork";
import EditRender from './edit/editRender';
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
const divStyleCard = {
  margin: '29px 29px'
};
function Render (props) {
  const { createWork,deleteWork,update,getDetailUserWork,renderDetail } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [modal,setModal]=useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const offModal=()=>{
    setModal(false);
  };
  const handleClickUpdate = (id) => {
    getDetailUserWork(id);
      setTimeout(()=>{
          setModal(true)
        },200)
  };
  const handleClick=(id)=>{
    deleteWork(id);
  };
  const userwork = useMemo(() => {
    return createWork?.userwork && createWork?.userwork.length > 0 ? createWork?.userwork : [];
  }, [createWork]);
  return userwork.map((item, index) => {
    return (
      <>
      <Card className={classes.root} style={divStyleCard}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className="text-center"> 
            Tên công việc:  { item?.nameWork || ""}         
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className="text-center"> 
          Kinh nghiệm: { item?.experience || ""}
        </Typography>
      </CardContent>
      <CardContent>
          <Typography paragraph>
              Học vấn: { item?.education || ""}
          </Typography>
        </CardContent>
      <CardActions disableSpacing>
      <Button variant="contained" color="secondary" onClick={()=>handleClick(item.id)}>
        <DeleteIcon/>
      </Button>
      <Button variant="contained" color="secondary" onClick={()=>handleClickUpdate(item.id)}>
        <EditIcon/>
      </Button>
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
    </Card>
      <EditRender modal={modal} offModal={offModal} update={update} getDetailUserWork={getDetailUserWork}  renderDetail={renderDetail}/>
      </>
      )
    }
)};
const mapStateToProp = state => {
  return {
    renderDetail: state.workUserReducer.detailUserWorkAdmin
  };
};
const mapDispatchToProps = dispatch => {
  return {
      deleteWork: (id) => {
          dispatch(Action.handleDeleteUserWorkAdminAPI(id));
      },
      getDetailUserWork: (id) => {
          dispatch(Action.actGetDetailUserWorkAdminAPI(id));
      },
      update: (id,updateUserWork) =>{
          dispatch(Action.acthandleUpdateUserWorkAdminAPI(id,updateUserWork))
      }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(Render);
