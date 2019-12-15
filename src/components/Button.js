import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

export default ({ children, className = '', onClick, ...props }) => (
	<button
		className={classNames(styles.Button, className)}
		onClick={onClick}
		{...props}
	>
		{children}
	</button>
);
