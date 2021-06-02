module.exports = {
  plugins: [
    require("autoprefixer"),
    require("tailwindcss"),
    require("cssnano")({
      preset: "default",
    }),
    require("@fullhuman/postcss-purgecss")({
      content: ["./**/*.html"],
    }),
  ],
};
