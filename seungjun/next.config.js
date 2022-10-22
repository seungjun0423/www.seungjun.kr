/** @type {import('next').NextConfig} */

const withPlugins = require("next-compos-plugins");

const withPWA = require("next-pwa")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: "public",
				},
			},
		],
        [
            typescript, 
            {
                typescriptLoaderOptions: {
                    transpileOnly: false,
                },
            }
        ],
        // ...
	],
	nextConfig
);
