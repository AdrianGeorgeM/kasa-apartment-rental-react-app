import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
const Tag = ({ tag }) => {
	return <span className='tag'>{tag}</span>;
};
export default Tag;
