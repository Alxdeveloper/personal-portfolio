module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6fbf73', // Light green
          DEFAULT: '#388e3c', // Default green
          dark: '#00600f', // Dark green
        },
        secondary: {
          light: '#ffcc80', // Light orange
          DEFAULT: '#ff9800', // Default orange
          dark: '#e65100', // Dark orange
        },
        neutral: {
          light: '#f5f5f5', // Light gray
          DEFAULT: '#9e9e9e', // Default gray
          dark: '#212121', // Dark gray
        },
      },
    },
  },
  plugins: [],
};
