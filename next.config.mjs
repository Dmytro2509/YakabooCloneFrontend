/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["static.yakaboo.ua", "localhost"]
    },
    plugins: [
        import ('@tailwindcss/aspect-ratio')
    ]
};

export default nextConfig;
