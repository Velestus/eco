import React from 'react';
import classNames from 'classnames';
import Picture from './Picture';
import styles from './Card.module.css';

const sizeStyles = Object.freeze({
	'1/4': styles.Card__Quarter,
	'1/3': styles.Card__Third,
	'1/2': styles.Card__Half,
	'1': styles.Card__Full
});

const Card = ({ children, size }) => (
	<div className={classNames(styles.Card, size && sizeStyles[size])}>
		<div className={styles.Content}>{children}</div>
	</div>
);

Object.assign(Card, {
	Description: ({ children }) => (
		<div className={styles.Description}>{children}</div>
	)
});

export default Card;
