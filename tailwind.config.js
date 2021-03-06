module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: "#95aac9",
      orange: "#F5A31C",
      blackText: "#12263f",
    },
    border: {
      lighBorder: " 1px solid #f2f2f2",
      orangeBorder: " 1px solid #F5A31C",
    },
    borderRadius: {
      lighBorderRadius: "4px",
    },
    background: {
      danger: "#DE3636",
      complete: "#00AF51",
      intermidiate: " #36A6DE",
      advanced: '#3444444'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
