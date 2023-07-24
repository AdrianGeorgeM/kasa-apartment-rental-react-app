import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Gallery from '@/pages/gallery';

const Layout = ({ children }) => (
	<div>
		<Header />
		<Banner />
		<Gallery />
	</div>
);

export default Layout;
