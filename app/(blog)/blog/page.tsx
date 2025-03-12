import { Posts } from '@/components/posts';
import { sanityFetch } from '@/sanity/lib/live';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import Header from '../../../components/header';

export default async function Page() {
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
	});

	return (
		<div className='min-h-screen bg-white'>
			<Header />
			<main className='max-w-3xl mx-auto px-6 py-12'>
				<h1 className='text-3xl font-bold mb-8 text-gray-900'>Blog</h1>
				<Posts posts={posts} />
			</main>
		</div>
	);
}
