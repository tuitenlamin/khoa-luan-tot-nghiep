import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NavbarAdmin from '../Admin/DashboardAdmin1';

const AdminLayout = (props) => {
	return (
		<Fragment>
			<NavbarAdmin />
			{props.children}
		</Fragment>
	);
};

export default function AdminTemplate({ Component, ...props }) {
	return (
		<Route
			{...props}
			render={(propsComponent) => {
				if (localStorage.getItem("userAdmin")) {
					// Truong hop da login
					return (
						<AdminLayout>
							<Component {...propsComponent} />
						</AdminLayout>
					);
				} else {
					// Chua login
					return <Redirect to="/admin" />;
				}
			}}
		/>
	);
}