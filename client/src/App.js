import React  from 'react';
import './App.css';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import {routerHome, routerAdmin} from "./router";
import HomeTemplate from "./Componen/Template/Home.Template";
import AdminTemplate from "./Componen/Template/Admin.Template";
import LoginAdmin from './Componen/Home/UserLogSingIn/loginAdmin'

function App() {
  //User
  const ShowMenuHome = (routes) => {
		if (routes && routes.length > 0) {
			return routes.map((item, index) => {
				return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />;
			});
		}
	};
  //Admin
	const ShowMenuAdmin = (routes) => {
		if (routes && routes.length > 0) {
			return routes.map((item, index) => {
				return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />;
			});
		}
	};
  return (  
    <BrowserRouter>
      <div>
        <Switch>
          {ShowMenuHome(routerHome)}
          {ShowMenuAdmin(routerAdmin)}
          <Route path="/admin" component={LoginAdmin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
