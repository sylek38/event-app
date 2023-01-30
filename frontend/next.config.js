/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
    ...nextTranslate(),
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["localhost"],
    },
};

module.exports = nextConfig;
