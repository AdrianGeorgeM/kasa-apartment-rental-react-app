// Header.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.module.css';

const Header = () => {
	return (
		<header className='header'>
			<Image
				src='/assets/header_logo.svg'
				alt='Logo'
				width={70}
				height={70}
				className='headerLogo'
			/>
			<nav className='nav'>
				<ul className='navbarList'>
					<li className='navbarListItem'>
						<Link href='/'>
							<span className='navbarLink'>Home</span>
						</Link>
					</li>
					<li className='navbarListItem'>
						<Link href='/about'>
							<span className='navbarLink'>About</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
