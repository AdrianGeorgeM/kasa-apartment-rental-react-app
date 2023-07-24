// Layout/index.js
import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Gallery from '@/pages/gallery';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;
