const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "e-commerce",
    projectName: "home",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react-dom/client",
      "@e-commerce/ui-utils",
    ],
    module: {
      rules: [{ test: /\.css$/i, use: ["postcss-loader"] }],
    },
  });
};
