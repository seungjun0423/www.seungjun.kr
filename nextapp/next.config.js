/** @type {import('next').NextConfig} */

const nextConfig = {
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// Todo : 호스트 네임 추후 설정 필요 
	// 			hostname: '추후 설정'
	// 		}
	// 	]
	// },
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
