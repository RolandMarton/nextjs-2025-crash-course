import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
	return (
		<div>
			<h1> User Profile: {params.id}</h1>
		</div>
	);
};

export default Page;
