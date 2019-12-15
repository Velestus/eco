import React from 'react';
import classNames from 'classnames';
import styles from './Layout.module.css';

const Layout = ({ children, className, horizontal, size }) => (
	<div
		className={classNames(
			styles.Layout,
			horizontal && styles.Layout__Horizontal,
			className
		)}
	>
		{children}
	</div>
);

export default Layout;
