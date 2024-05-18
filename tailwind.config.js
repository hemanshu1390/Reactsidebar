const withMT = require("@material-tailwind/react/utils/withMT");

// Merge Material Tailwind configuration with existing Tailwind CSS configuration
const mergedConfig = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Your existing content paths
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, // Your existing theme extensions
  },
  plugins: [], // Your existing plugins
});

module.exports = mergedConfig;