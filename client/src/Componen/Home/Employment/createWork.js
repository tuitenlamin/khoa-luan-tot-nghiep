import React, {useMemo,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { connect } from "react-redux";
import * as Action from  "../../../ShareAll/Action/work";
import EditWorkFromCompany from './edit/editWorkFromCompany';
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
}
const DivButton = {
  width: '312px'
}
function CreateWork (props) {
  const { createWork,renderDetail,getDetailWork,updateWork } = props;
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
      getDetailWork(id);
      setTimeout(()=>{
          setModal(true)
        },200)
  };
  const handleClick=(id)=>{
    const {deleteWork} = props;
    deleteWork(id);
  } ;
  const fromCompanys = useMemo(() => {
    return createWork?.fromcompany && createWork?.fromcompany.length > 0 ? createWork?.fromcompany : [];
  }, [createWork]);
    return fromCompanys.map((item, index) => {
      return (
        <>
        <Grid item xs={4}> 
            <Card className={classes.root} style={divStyleCard}>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="text-center"
              >
                Tên công việc:  { item?.nameWork}         
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="text-center"
              >
                Kinh nghiệm: { item?.experience}
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
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Học vấn: { item?.education}
                </Typography>
                <Typography paragraph>
                  Mô tả Công việc: { item?.description}
                </Typography>
                <Typography paragraph>
                  Địa chỉ: { item?.addr}
                </Typography>
                <Typography paragraph>
                  Level: { item?.levelWork}
                </Typography>
                <Typography>
                  Lương: { item?.salary}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <EditWorkFromCompany modal={modal} offModal={offModal} renderDetail={renderDetail} getDetailWork={getDetailWork} updateWork={updateWork}/>
        </>
      );
    });
  };
const mapStateToProp = state => {
  return {
    renderDetail: state.workReducer.detailUpdateWork
  };
};
const mapDispatchToProps = dispatch => {
  return {
      deleteWork: (id) => {
          dispatch(Action.handleDeleteWork(id));
      },
      getDetailWork: (id) => {
          dispatch(Action.actDetailUpdateWorkAPI(id));
      },
      updateWork: (id,updateWork) =>{
          dispatch(Action.handleUpdateWork(id,updateWork))
      }
  };
}
export default connect(mapStateToProp, mapDispatchToProps)(CreateWork);
