/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
	// images: {
	// 	remotePatterns: [
	// 		{
	// 			protocol: 'https',
	// 			// Todo : 호스트 네임 추후 설정 필요 
	// 			hostname: '추후 설정'
	// 		}
	// 	]
	// },
	// async redirects(){
	// 	return [
	// 		{
	// 			// Todo : 추후 리다이렉트 설정 추가 필요
	// 		}
	// 	]
	// }
};

module.exports = nextConfig
