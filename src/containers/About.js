import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Layout, Picture } from '../components';
import data from '../assets/json/players';

const About = () => {
	let { id } = useParams();
	const player = data.players[id];

	return (
		<Layout>
			<h2>{`Player details`}</h2>
			<Card size="1" key={id}>
				<Picture
					src={player.photo ? player.photo : undefined}
					description={player.name}
				/>
				<Card.Description>
					<p>{player.name}</p>
					<p>{player.level}</p>
					<p>{player.email}</p>
					<br />
					<p>User Statistics</p>
					<p>{`Victories: ${player.victories}`}</p>
					<p>{`Games played: ${player.gamesPlayed}`}</p>
					<p>{`Goals scored: ${player.goalsScored}`}</p>
				</Card.Description>
			</Card>
		</Layout>
	);
};

export default About;
