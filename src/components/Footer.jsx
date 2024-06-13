import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	const [hovered, setHovered] = useState(null);

	const handleHover = (iconName) => {
		setHovered(iconName);
	};

	const handleMouseLeave = () => {
		setHovered(null);
	};

	const icons = [
		{ name: 'Github', icon: FaGithub, link: 'https://github.com/jika-github' },
		{
			name: 'Instagram',
			icon: FaInstagram,
			link: 'https://www.instagram.com/ifjika__?igsh=NTc4MTIwNjQ2YQ==',
		},
		{
			name: 'LinkedIn',
			icon: FaLinkedin,
			link: 'https://id.linkedin.com/in/jikapramuja',
		},
		{
			name: 'Mail',
			icon: FiMail,
			link: '/mail',
		},
	];

	return (
		<footer className="text-white py-8">
			<div className="border-t border-white my-4"></div>
			{/* <div className="text-s my-8 flex justify-center items-center">
				<div className="flex justify-center items-center max-w-xs">
					"When you come right down to it, at it's core, beneath every choice,
					there's either a one or a zero. You either do something or you don't."
					<br />~ Mr Robot
				</div>
			</div> */}
			<div className="container mx-auto text-center">
				<p className="text-sm">© 2024 Jika Pramuja All rights reserved.</p>
				<div className="flex justify-center items-center mt-4">
					{icons.map((icon, index) => {
						const Icon = icon.icon;
						return (
							<a
								key={index}
								href={icon.link}
								className="mx-2"
								onMouseEnter={() => handleHover(icon.name)}
								onMouseLeave={handleMouseLeave}>
								<div className="hover:bg-custom-second-blue px-2 py-2 rounded-lg transition-all ease-in-ou">
									<Icon size={24} />
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
