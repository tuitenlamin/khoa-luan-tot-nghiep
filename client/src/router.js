import Index from "./Componen/Home/index";
import ListJob from "./Componen/Home/List-Job/ListJob";
import Navbar from "./Componen/Home/navbar";
import FileCV from "./Componen/Home/user-create-cv/fileCV";
import DetailWork from "./Componen/Home/List-Job/detail-work/detailWork";
import Login from "./Componen/Home/UserLogSingIn/Login"
import Resigter from "./Componen/Home/UserLogSingIn/Register-User/Resigter"
import PageEmployer from './Componen/Home/Employment/pageEmployer';
import InformationUser from './Componen/Home/informationUser/InformationUser';
import ResigterEmployment from './Componen/Home/UserLogSingIn/ResigterEmployment';
import UserPostWork from './Componen/Home/UserPost/userPostWork';
import InfoDetail from './Componen/Home/UserPost/nextPage/infoDetail';
import WorkUser from './Componen/Home/Post-Work-User/workUser'
import Applied from './Componen/Home/Post-Work-User/User-Apply/index'
//ADMIN
import DashboardAdmin from './Componen/Admin/DashboardAdmin';
import DashboardAdmin1 from './Componen/Admin/DashboardAdmin1';
const routerHome = [
    {
        path: '/',
        exact: true,
        component: Index
    },
    {
        path: '/user-applied',
        exact: true,
        component: Applied
    },
    {
        path: '/create-work-user',
        exact: true,
        component: WorkUser
    },
    {
        path: '/list-job',
        exact: true,
        component: ListJob
    },
    {
        path: '/',
        exact: true,
        component: Navbar
    },
    {
        path: '/create-cv',
        exact: true,
        component: FileCV
    },
    {
        path: '/detail-company/:id',
        exact: false,
        component: DetailWork
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: '/resigter',
        exact: true,
        component: Resigter
    },
    {
        path: '/pageEmployer',
        exact: true,
        component: PageEmployer
    },
    {
        path: '/resigter-employment',
        exact: true,
        component: ResigterEmployment
    },
    {
        path: '/information-user',
        exact: true,
        component: InformationUser
    },
    {
		path: '/pageadmin',
		exact: false,
		component: DashboardAdmin
	},
    {
		path: '/user-post-work',
		exact: false,
		component: UserPostWork
	},
    {
		path: '/detail-user',
		exact: false,
		component: InfoDetail
	}
];
const routerAdmin = [
    {
		path: '/pageadmin',
		exact: false,
		component: DashboardAdmin1
	}
];
export {routerHome, routerAdmin};