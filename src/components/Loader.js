import React from 'react';
import styles from './Loader.module.css';

export default () => (
	<div className={styles.Wrapper}>
		<div className={styles.Loader}>
			<div className={styles.Dot} />
			<div className={styles.Dot} />
			<div className={styles.Dot} />
			<div className={styles.Dot} />
			<div className={styles.Dot} />
			<div className={styles.Dot} />
		</div>
	</div>
);
