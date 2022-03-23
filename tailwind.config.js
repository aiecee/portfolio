module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-code-pro": ['"Source Code Pro"', "monospace"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      flamingo: "#f2cdcd",
      mauve: "#ddb6f2",
      pink: "#f5c2e7",
      maroon: "#e8a2af",
      red: "#f28fad",
      peach: "#f8db96",
      yellow: "#fae3b0",
      green: "#abe9b3",
      teal: "#b5e8e0",
      blue: "#96cdfb",
      sky: "#89dceb",
      black: {
        0: "#161320",
        1: "#1a1826",
        2: "#1e1e2e",
        3: "#302d41",
        4: "#575268",
      },
      gray: {
        0: "#6e6c7e",
        1: "#988ba2",
        2: "#c3bac6",
      },
      white: "#d9e0ee",
      lavender: "#c9cbff",
      rosewater: "#f5e0dc",
    },
  },
  plugins: [],
};
