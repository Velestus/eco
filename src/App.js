import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch
} from 'react-router-dom';
import { Layout } from './components';
import { About, Home, Login } from './containers';
import './App.css';

const PrivateRoute = ({ children, login, ...props }) => (
	<Route
		{...props}
		render={() => (login ? children : <Redirect to={{ pathname: '/login' }} />)}
	/>
);

const App = props => {
	const [login, setLogin] = useState(false);

	const onLogin = e => {
		e.preventDefault();
		setLogin(true);
	};

	const onLogout = e => {
		e.preventDefault();
		console.log('logout: ', login);
		setLogin(false);
	};

	return (
		<div className="App">
			<h1>Soccer App</h1>
			<Router>
				<Switch>
					<Route path="/login">
						<Login onLogin={onLogin} login={login} />
					</Route>
					<PrivateRoute path="/about/:id" login={login}>
						<About />
					</PrivateRoute>
					<PrivateRoute path="/" login={login}>
						<Home />
					</PrivateRoute>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
