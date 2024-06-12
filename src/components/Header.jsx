import React from 'react';

const Header = () => {
	const menuItems = [
		{ text: 'Home', href: '#' },
		{ text: 'About', href: '#' },
		{ text: 'Portofolio', href: '#' },
		{ text: 'Contact', href: '#' },
	];

	return (
		<header className="text-white py-8">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-xl font-bold pl-20">
					<a
						href="#"
						className="hover:text-custom-fifth-blue transition-all duration-500 ease-in-out">
						It's Jika
					</a>
				</h1>
				<nav>
					<ul className="flex space-x-4 pr-20">
						{menuItems.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									className="hover:text-custom-fifth-blue hover:bg-custom-second-blue px-2 py-2 rounded-lg transition-all duration-500 ease-in-out">
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
