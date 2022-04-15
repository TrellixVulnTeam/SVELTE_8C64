const autoPreprocess = require("svelte-preprocess");

module.export = {
  preprocess: autoPreprocess({
    scss: {
      prependData: '@import "./src/scss/main.scss";',
    },
  }),
};
