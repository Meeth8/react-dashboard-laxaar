/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fffdfd",
          "200": "#292929",
        },
        "color-states-common-white": "#fff",
        darkslategray: "#454f5a",
        salmon: {
          "100": "#f87060",
          "200": "rgba(248, 112, 96, 0.5)",
        },
        "color-states-success-success-dark": "#3bb900",
        crimson: "#ff1943",
        orange: "#ffa319",
        gainsboro: "#e0e0e0",
        "color-states-common-black": "#223354",
        lavenderblush: "#fff2f1",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "proxima-nova": "'Proxima Nova'",
      },
      borderRadius: {
        "3xs": "10px",
        "31xl": "50px",
        "12xs-5": "0.5px",
        mini: "15px",
        "18xl": "37px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};