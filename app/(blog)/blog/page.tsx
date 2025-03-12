import { Posts } from '@/components/posts';
import { sanityFetch } from '@/sanity/lib/live';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import Header from '../../../components/header';

export default async function Page() {
	const { data: posts } = await sanityFetch({
		query: POSTS_QUERY,
	});

	return (
		<div>
			<Header />
			<main className='max-w-7xl mx-auto px-6 py-8'>
				<Posts posts={posts} />
			</main>
		</div>
	);
}
