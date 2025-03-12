import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SanityLive } from '@/sanity/lib/live';
import { DisableDraftMode } from '@/components/disable-draft-mode';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Break Into Tech',
	description:
		'A blog about learning to code, time management, and contract work for aspiring developers.',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<SanityLive />
				{(await draftMode()).isEnabled && (
					<>
						<DisableDraftMode />
						<VisualEditing />
					</>
				)}
			</body>
		</html>
	);
}
