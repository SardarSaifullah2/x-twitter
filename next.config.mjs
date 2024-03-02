/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns :[
            {
                hostname: "*.ftcdn.net"
            },
            {
                hostname: "*.githubusercontent.com"
            },
            {
                hostname: "*.twimg.com"
            },
            {
                hostname: "*.amazonaws.com"
            },
            {
                hostname: "*.googleusercontent.com"
            },
            {
                hostname: "*.freepik.com"
            },
        ]
    }

};
export default nextConfig;
