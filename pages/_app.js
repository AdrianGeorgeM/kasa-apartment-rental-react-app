// _app.js is used to initialize pages in Next.js. You can override it and control the page initialization.

import React from 'react';
import Layout from '../src/components/Layout';

const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
