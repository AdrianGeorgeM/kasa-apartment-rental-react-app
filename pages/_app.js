// pages/_app.js

import React from 'react';
import Layout from '../src/components/Layout';

const App = ({ Component, pageProps }) => (
	<Layout>
		<Component {...pageProps} />
	</Layout>
);

export default App;
