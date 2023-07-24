import React from 'react';
import Header from '@/src/components/Header/Header';
import Banner from '@/src/components/Banner/Banner';
import Gallery from '../pages/gallery';
import '../styles/Home.module.css';

const Home = () => {
	return (
		<main className='home'>
			<Header />
			<Banner />
			<Gallery />
		</main>
	);
};

export default Home;
