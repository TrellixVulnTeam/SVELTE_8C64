module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-optimize"],
  alias: {
    "~": "./src",
  },
  devOptions: {
    // port: 8080, 기본옵션으로 8080설정
    open: "none",
  },
};
