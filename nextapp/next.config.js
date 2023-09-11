/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
    typedRoutes: true,
  },
	// typescript: {
  //   ignoreBuildErrors: true,
  // },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 's3.ap-northeast-2.amazonaws.com',
			}
		]
	},
	// async redirects(){
	// 	return [
	// 		{
	// Todo : 추후 리다이렉트 설정 추가 필요
	// 		}
	// 	]
	// }
	swcMinify: true,
  compiler: {
    styledComponents: true,
  },
	reactStrictMode:true,
	// async redirects(){
  //   return [
  //     {
  //       source: "/auth",
  //       destination: "/",
  //       permanent: false
  //     }
  //   ]
  // }
	// dAppMetadata: {
  //   name: "blog",
  //   // url: "https://seungjun.kr",
  //   url: "http://localhost:3000",
  // },
};

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/auth',
//         destination: '/',
//       },
//     ]
//   },
// }

module.exports = nextConfig
