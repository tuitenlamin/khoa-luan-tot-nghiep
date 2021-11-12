import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Home/navbar';
import Footer from '../Home/Footer/footer'

const HomeLayOut = (props) => {
	return (
		<Fragment>
			<Navbar />
			{props.children}
		</Fragment>
	);
};
export default function HomeTemplate({ Component, ...props }) {
	return (
		<Route
			{...props}
			render={(propsComponent) => (
				<HomeLayOut>
					<Component {...propsComponent} />
				</HomeLayOut>
			)}
		/>
	);
}
