import { POSTS_QUERYResult } from '../sanity.types';
import Image from 'next/image';

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{posts.map((post) => (
				<a
					key={post._id}
					className='block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'
					href={`/posts/${post?.slug?.current}`}
				>
					<div className='relative h-48 w-full'>
						{post?.mainImage ? (
							<Image
								src={post.mainImage.url}
								alt={post.title || 'Blog post image'}
								fill
								className='object-cover'
							/>
						) : (
							<div className='w-full h-full bg-gray-200 flex items-center justify-center'>
								<span className='text-gray-400' />
							</div>
						)}
					</div>
					<div className='p-4'>
						<h3 className='font-semibold text-lg mb-2'>
							{post?.title}
						</h3>
						{post?.publishedAt && (
							<p className='text-sm text-gray-600'>
								{new Date(
									post.publishedAt
								).toLocaleDateString()}
							</p>
						)}
					</div>
				</a>
			))}
		</div>
	);
}
