// pages/_app.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Home from './Home/Home';
import About from './About/About';
import Apartment from './Apartment/Apartment';
import Gallery from './Gallery/Gallery';
import Error404 from './Error404/Error404';

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/apartment' component={Apartment} />
					<Route path='/gallery' component={Gallery} />
					<Route component={Error404} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
