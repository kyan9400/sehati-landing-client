// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this is correct
  theme: {
    extend: {
      backgroundImage: {
        // If you have anything here, check the paths carefully
        // 'hero-pattern': "url('/path/to/hero-pattern.svg')", // THIS IS AN EXAMPLE OF A BAD PATH
      },
    },
  },
  plugins: [],
};
