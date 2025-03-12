import Link from 'next/link';

const Header = () => {
	return (
		<header className='w-full py-4 px-6 border-b'>
			<div className='max-w-7xl mx-auto grid grid-cols-2 items-center'>
				<Link href='/' className='text-xl font-bold'>
					Break into Tech
				</Link>
				<nav className='justify-self-end'>
					<Link
						href='/blog'
						className='hover:text-gray-600 transition-colors'
					>
						Blog
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
