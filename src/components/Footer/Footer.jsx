import Image from 'next/image';
import Link from 'next/link';
import footer_logo from '/public/assets/footer_logo.svg';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Link href='/'>
				<Image
					src={footer_logo}
					alt='Footer Logo'
					className={styles.footer__logo}
					width={144}
					height={36}
				/>
			</Link>
			<p className={styles.footer__text}>© 2023 Kasa. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
