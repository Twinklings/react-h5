// const withStylus = require("@zeit/next-stylus");
// const withTypescript = require("@zeit/next-typescript");
// const withSourceMaps = require("@zeit/next-source-maps");
// const nib = require("nib");
// const path = require("path");
// const rupture = require("rupture");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const { WebpackBundleSizeAnalyzerPlugin } = require("webpack-bundle-size-analyzer");

// const envConfig = require("./config/index");
// // const getRoutes = require("./routes");
// const withLessAntd = require("./utils/with-less-node_modules");
// const withAssets = require("./utils/with-assets");
// const withCssChunkConfig = require("./utils/with-css-chunk");

// const nextConfig = {
//   distDir: "../build/www",

//   assetPrefix: envConfig.cdn,

//   cssModules: true,

//   cssLoaderOptions: {
//     minimize: process.env.NODE_ENV === "production",
//     // importLoaders: 2,
//     localIdentName: "[local]___[hash:base64:5]"
//   },

//   stylusLoaderOptions: {
//     use: [nib(), rupture()]
//   },

//   // serverRuntimeConfig: {},
//   publicRuntimeConfig: {
//     ...envConfig,
//     env: process.env.NODE_ENV || "development"
//   },

//   // 自定义路由有坑，需要使用过滤方法，以后再研究优化
//   // useFileSystemPublicRoutes: false,
//   // exportPathMap: getRoutes,

//   generateBuildId: async () => {
//     return `${Date.now()}`;
//   },

//   webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
//     switch (process.env.ANALYZE) {
//       case "BUNDLES":
//         config.plugins.push(
//           new BundleAnalyzerPlugin({
//             analyzerMode: "server",
//             analyzerPort: dev ? 8888 : 8889,
//             openAnalyzer: true
//           })
//         );
//         break;
//       case "SIZE":
//         config.plugins.push(new WebpackBundleSizeAnalyzerPlugin("stats.txt"));
//         break;
//     }

//     const originalEntry = config.entry;
//     config.entry = async () => {
//       const entries = await originalEntry();
//       if (entries["main.js"] && !entries["main.js"].includes("./utils/polyfills.ts")) {
//         entries["main.js"].unshift("./utils/polyfills.ts");
//       }
//       return entries;
//     };

//     config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx", ".json"];

//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@components": path.join(__dirname, "src/components"),
//       "@pages": path.join(__dirname, "src/pages"),
//       "@assets": path.join(__dirname, "src/assets"),
//       "@styles": path.join(__dirname, "src/styles"),
//       "@services": path.join(__dirname, "src/services"),
//       "@stores": path.join(__dirname, "src/stores"),
//       "@utils": path.join(__dirname, "src/utils"),
//       "@static": path.join(__dirname, "src/static")
//     };

//     if (dev) {
//       config.devtool = "cheap-module-source-map";

//       if (process.env.ANALYZE === "ESLINT") {
//         config.module.rules.push({
//           test: /\.(js|jsx|ts|tsx)$/,
//           enforce: "pre",
//           loader: "eslint-loader",
//           exclude: ["/node_modules/", "/build/", "/config/"],
//           options: {
//             formatter: require("eslint-friendly-formatter"),
//             emitError: true
//           }
//         });
//       }
//     }

//     return config;
//   }
// };

// module.exports = withTypescript(
//   withStylus(withLessAntd(withSourceMaps(withAssets(withCssChunkConfig(nextConfig)))))
// );
