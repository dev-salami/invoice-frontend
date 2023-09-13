/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: {
	// 	removeUnknownAttributes: true,
	// },
	images: {
		remotePatterns: [
			{
				hostname: "tailwindui.com",
			},
		],
	},
};

module.exports = nextConfig;
