import React, { useMemo } from 'react';
import { useRouter } from 'next/router';

import styles from './Tag.module.css';
const Tag = ({ tag }) => {
	return <span className={styles.tag}>{tag}</span>;
};
export default Tag;
