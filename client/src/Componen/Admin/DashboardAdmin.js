import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BusinessIcon from '@material-ui/icons/Business';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import CreateTypeWork from './manage-user/userAdmin';
import CreaTypeWork from './manage-typeWork/creaTypeWork';
import Company from './manage-company/company';
import News from './manage-News/news';
import Work from './manage-work/work';
import WorkUser from './work-User/workUser'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
}));

export default function DashboardAdmin() {
	const handleLogOut = () => {
		localStorage.removeItem('userAdmin');
	};
	
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							CH??O M???NG NH?? QU???N TR???
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</div>
					{/* Sidebar  */}
					<Divider />
					<List>
						{/* <Link to="/admin/UpLoadIMG">
							<ListItem>
								<PeopleAltIcon />
								<ListItemText primary="Bi???u ????? kinh doanh" />
							</ListItem>
						</Link> */}
						<Link to="/admin/manage-user">
							<ListItem>
								<PeopleAltIcon />
								<ListItemText primary="Qu???n l?? ng?????i d??ng" />
							</ListItem>
						</Link>
						<Link to="/admin/manage-type-wrok">
							<ListItem>
								<WorkIcon />
								<ListItemText primary="Qu???n l?? ki???u c??ng vi???c" />
							</ListItem>
						</Link>
						{/* <Link to="/admin/manage-user-work">
							<ListItem>
								<WorkIcon />
								<ListItemText primary="Qu???n l?? t??m vi???c ???ng vi??n" />
							</ListItem>
						</Link> */}
						<Link to="/admin/manage-company">
							<ListItem>
								<BusinessIcon />
								<ListItemText primary="Qu???n l?? c??ng ty" />
							</ListItem>
						</Link>
						<Link to="/admin/manage-news">
							<ListItem>
								<FiberNewIcon />
								<ListItemText primary="Qu???n l?? b??i b??o" />
							</ListItem>
						</Link>
						<Link to="/admin/manage-work">
							<ListItem>
								<FiberNewIcon />
								<ListItemText primary="Qu???n l?? b??i vi???t c??ng vi???c tuy???n d???ng" />
							</ListItem>
						</Link>
						<ListItem>
							<IconButton onClick={handleLogOut} href="/admin">
								<ExitToAppIcon />
								<ListItemText primary="????ng xu???t" />
							</IconButton>
						</ListItem>
					</List>
				</Drawer>
				{/* end sidebar  */}
				{/* m??n h??nh  */}
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					{/* <Switch>
						<Route exact path="/admin/UpLoadIMG">
							<UpLoadIMG />
						</Route>
					</Switch> */}
					<Switch>
						<Route exact path="/admin/manage-user">
							<CreateTypeWork />
						</Route>
					</Switch>
					<Switch>
						<Route exact path="/admin/manage-type-wrok">
							<CreaTypeWork />
						</Route>
					</Switch>
					<Switch>
						<Route exact path="/admin/manage-user-work">
							<WorkUser />
						</Route>
					</Switch>
					<Switch>
						<Route exact path="/admin/manage-company">
							<Company />
						</Route>
					</Switch>
					<Switch>
						<Route exact path="/admin/manage-news">
							<News />
						</Route>
					</Switch>
					<Switch>
						<Route exact path="/admin/manage-work">
							<Work />
						</Route>
					</Switch>
				</main>
				{/* end m??n h??nh */}
			</div>
		</Router>
	);
}
