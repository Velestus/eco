import React from 'react';
import classNames from 'classnames';
import styles from './Picture.module.css';

export default ({
	smaller,
	description = 'Player avatar',
	src = 'assets/images/player.png',
	...props
}) => (
	<img
		className={classNames(styles.Picture, smaller && styles.Picture__Smaller)}
		src={require(`../${src}`)}
		alt={description}
		{...props}
	/>
);
