import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = ({ children, className = '', type = 'text' }) => (
	<div className={styles.Wrapper}>
		<label className={styles.Label} htmlFor={children}>
			{children}
		</label>
		<br />
		<input
			className={classNames(styles.Input, className)}
			type={type}
			name={children}
			placeholder={children}
			defaultValue={`${children}-input`}
		/>
	</div>
);

export default Input;
