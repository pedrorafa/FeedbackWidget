module.exports = {
  content: ["./src/**/*.{tsx, html}"],
  theme: {
    extend: {
      colors: {
        brand: "#8257E5",
        "brand-hover": "#996DFF",
        "surface-primary": "#18181B",
        "surface-secondary": "#27272A",
        "surface-secondary-hover": "#3F3F46",
        stroke: "#52525B",
        tooltip: "#F4F4F5",
        "text-primary": "#F4F4F5",
        "text-secondary": "#A1A1AA",
        "text-on-tooltip": "#27272A",
        background: "#09090A",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")
  ],
};
