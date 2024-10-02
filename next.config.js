// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**", // This covers the path for the image sizes (e.g., `/w500`, `/w300`)
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};
