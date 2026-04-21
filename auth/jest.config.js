module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
    "@e-commerce/api": "../../../api/src/e-commerce-api.ts",
    "@e-commerce/ui-utils": "../../../ui-utils/src/e-commerce-ui-utils.tsx",
  },
  setupFilesAfterEnv: ["../setup-env.js", "@testing-library/jest-dom"],
};
