import React from 'react';
import { useRouter } from 'next/router';
import ApartmentDetails from '@/src/components/ApartmentDetails/ApartmentDetails';

const ApartmentPage = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			<ApartmentDetails id={id} />
		</div>
	);
};

export default ApartmentPage;
