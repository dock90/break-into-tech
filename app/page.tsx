import Header from '../components/header';

export default function Home() {
	return (
		<div className='bg-white'>
			<Header />
			<main className='max-w-7xl mx-auto px-6 py-16 md:py-24'>
				<div className='flex flex-col items-center text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6 tracking-tight'>
						Break Into Tech
					</h1>
					<p className='text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed'>
						Learn to code, better manage your time, and get paid to
						code with contract work.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
					<div className='p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow'>
						<h2 className='text-xl font-semibold mb-3'>
							Learn to Code
						</h2>
						<p className='text-gray-600'>
							Master programming fundamentals and build real-world
							projects to showcase your skills.
						</p>
					</div>

					<div className='p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow'>
						<h2 className='text-xl font-semibold mb-3'>
							Manage Your Time
						</h2>
						<p className='text-gray-600'>
							Discover productivity techniques that help you
							balance learning with your existing commitments.
						</p>
					</div>

					<div className='p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow'>
						<h2 className='text-xl font-semibold mb-3'>
							Get Paid to Code
						</h2>
						<p className='text-gray-600'>
							Find contract opportunities and build a sustainable
							income from your programming skills.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
