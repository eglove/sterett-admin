module.exports = {
  root: true,
  extends: ['ethang'],
  ignorePatterns: ["dist", ".eslintrc.js"],
  rules: {
    "react/jsx-max-depth": "off",
    "react/jsx-no-leaked-render": "off",
    "react/jsx-no-literals": "off"
  },
}
