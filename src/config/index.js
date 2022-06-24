const config = {
  apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://admin-my-portfolio.vercel.app',
  revalidateAt: 3600,
};

export default config;
