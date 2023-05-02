/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    emotion:{
      autoLabel:'always',
      sourceMap:false,
    }
  }
}

module.exports = nextConfig
