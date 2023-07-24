// Layout/index.js
import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Gallery from '@/pages/gallery';

const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
	</div>
);

export default Layout;
