import React from 'react';
import clsx from 'clsx';
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
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MovieIcon from '@material-ui/icons/Movie';
import InfomationCompany from './Info-Company/informationCompany';
import RenderPostWorkEmployer from './renderPostWorkEmployer';
import Application from '../Application/application'
import Footer from '../Footer/footer';
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

export default function PageEmployer() {
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
		<>
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
							CHÀO MỪNG NHÀ TUYỂN DỤNG
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
						<Link to="/information-Employer">
							<ListItem>
								<PeopleAltIcon />
								<ListItemText primary="Quản lí thông tin" />
							</ListItem>
						</Link>
						<Link to="/create-work-employer">
							<ListItem>
								<MovieIcon />
								<ListItemText primary="Tạo thông tin tuyển dụng" />
							</ListItem>
						</Link>
						<Link to="/application">
							<ListItem>
								<MovieIcon />
								<ListItemText primary="Thông tin ứng viên" />
							</ListItem>
						</Link>
						<ListItem>
							<IconButton  href="/">
								<ExitToAppIcon />
								<ListItemText primary="Trang chủ" />
							</IconButton>
						</ListItem>
					</List>
				</Drawer>
				{/* end sidebar  */}
				{/* màn hình  */}
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<Switch>
						<Route exact path="/information-Employer">
							<InfomationCompany />
						</Route>
						<Route exact path="/create-work-employer">
							<RenderPostWorkEmployer />
						</Route>
						<Route exact path="/application">
							<Application />
						</Route>
					</Switch>
				</main>
				{/* end màn hình */}
			</div>
		</Router>
		{/* <Footer/> */}
		</>
	);
}
