import { PiButterflyDuotone } from 'react-icons/pi';

const Header = () => {
	const menuItems = [
		{ text: 'Home', href: '/' },
		{ text: 'About', href: '/' },
		{ text: 'Portofolio', href: '/' },
		{ text: 'Contact', href: '/' },
	];

	return (
		<header className="text-white py-8">
			<div className="container mx-auto flex justify-between items-center">
				<div className="ml-20 flex justify-center items-center hover:text-custom-fifth-blue transition-all duration-500 ease-in-out">
					<a
						href="/"
						className="flex justify-center items-center">
						<PiButterflyDuotone size={36} />
						<span className="pl-2 pt-2 font-bold">Jika</span>
					</a>
				</div>
				<nav>
					<ul className="flex space-x-4 pr-20">
						{menuItems.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									className="hover:text-custom-fifth-blue hover:bg-custom-second-blue p-2 rounded-lg transition-all duration-500 ease-in-out">
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
