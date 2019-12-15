import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Input, Layout, Loader } from '../components';

const Login = ({ onLogin, history, login }) => (
	<Layout>
		<Input>Username</Input>
		<Input type="password">Password</Input>
		<Button
			onClick={e => {
				onLogin(e);
				setTimeout(() => history.push('/'), 1000);
			}}
		>
			Login
		</Button>
		{login && <Loader />}
	</Layout>
);

export default withRouter(Login);
