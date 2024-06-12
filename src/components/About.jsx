import React from 'react';
import jikaPhoto from '../img/img-1.jpg';

const About = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-48 h-48 overflow-hidden rounded-full">
				<img
					src={jikaPhoto}
					alt="Jika Photo"
					className="w-full h-auto"
				/>
			</div>
		</div>
	);
};

export default About;
