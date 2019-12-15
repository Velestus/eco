import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, Layout, Picture } from '../components';
import data from '../assets/json/players';

const Home = ({ history }) => (
	<Layout>
		<h2>Player Lobby</h2>
		<Layout horizontal>
			{data.players.map((player, id) => (
				<Card size="1/3" key={id}>
					<Picture
						src={player.photo ? player.photo : undefined}
						description={player.name}
						smaller
					/>
					<Card.Description>
						<p>{player.name}</p>
						<p>{player.level}</p>
						<p>{player.email}</p>
						<Button onClick={() => history.push(`/about/${id}`)}>
							Player details
						</Button>
					</Card.Description>
				</Card>
			))}
		</Layout>
	</Layout>
);

export default withRouter(Home);
