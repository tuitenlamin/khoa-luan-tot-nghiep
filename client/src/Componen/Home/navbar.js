import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Utils from "../../utils";
import UserPostWork from './UserPost/userPostWork'

const divLine = {
	textDecoration: 'none'
}

const divStyle =
{
  padding: '0px 25px'
}
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation();
  const history = useHistory();
  const userType = Utils.getUserType();


  const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
  //logout
	const logout = () => {
		localStorage.removeItem("user");
		localStorage.setItem("prevLocation", location?.pathname || "");
		history.push("/"); //logout se redirect ve trang /login
	};
  //login
  
	const isLogin = () => {
		if (localStorage.getItem("user")) {
			let user = JSON.parse(localStorage.getItem("user"));
			//Logged
			return (
				<>
					<div>
						<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
							<Avatar>
								<img src={user.avatar} className="Navbar-Img"/>
							</Avatar> 
							<span className="Navbar-span">{user.name}</span>
						</Button>
						<div className="Navbar-Menu">
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								
									<>
									{userType === Utils.constUngVien && <>
										<NavLink exact to={{pathname:'/information-user'}}  style={divLine}>
											<MenuItem onClick={handleClose}>Thông tin cá nhân</MenuItem>
										</NavLink>
									</>}
									</>
									{/* <NavLink exact to={{pathname:'/user-applied'}}  style={divLine}>
										<MenuItem onClick={handleClose}>Đã ứng tuyển</MenuItem>
									</NavLink> */}
								
								<Link to="/login" onClick={handleClose}><AccountCircleIcon className="Navbar-Icon"/></Link>  
								<MenuItem onClick={handleClose} onClick={logout} href="# ">Đăng xuất</MenuItem>
							</Menu>
						</div>
					</div>
				</>
			);
		}
		//check Not logged in
		return (
			<NavLink
				className="user d-flex align-items-center"
				activeClassName="active"
				exact
				to={{
					pathname: `/login`,
				}}
			>
				{/* <AccountCircleIcon />s */}
				<Link to="/login" onClick={handleClose}><AccountCircleIcon className="Navbar-Icon"/></Link>  
			</NavLink>
		);
	};
	//end check login
    return (
		<>
        <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              {isLogin()}
              <Typography variant="h6" className="nav-title" style={divStyle}><Link to="/" className="Navbar-title">Find Job</Link></Typography>
              <Typography variant="h6" className="nav-title" style={divStyle}><Link to="/list-job" className="Navbar-title">Việc Làm</Link></Typography>
			  <Typography variant="h6" className="nav-title" style={divStyle}><Link to="/user-post-work" className="Navbar-title">Ứng viên</Link></Typography> 
              {userType === Utils.constNhaTuyenDung && <Typography variant="h6" className="nav-title" style={divStyle}><Link to="/pageEmployer" className="Navbar-title">Nhà Tuyển Dụng</Link></Typography>}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container>
        </Container>
      </React.Fragment>
	  </>
    )
}
