// 引入node内置的路径模块（用于处理文件路径）
const path = require("path");
// 引入 html-webpack-plugin 插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 1. 入口配置（指定打包的起始文件）
  entry: "./src/index.js",
  
  // 2. 输出配置（指定打包后的文件位置/名称）
  output: {
    filename: "main.js", // 打包后的JS文件名
    path: path.resolve(__dirname, "dist"), // 输出到dist目录
    clean: true, // 每次打包前清空dist目录（webpack5+ 新增）
  },

  // 3. 插件配置（核心：配置html-webpack-plugin）
  plugins: [
    new HtmlWebpackPlugin({
      // 可选：自定义生成的HTML文件名（默认index.html）
      filename: "index.html",
      // 可选：设置HTML标题（会替换模板中的<title>）
      title: "React App",
      // 可选：压缩HTML（生产环境推荐开启）
      minify: {
        removeComments: false, // 移除注释
        collapseWhitespace: false, // 折叠空白字符
      },
      // 可选：指定自定义HTML模板（如果需要自定义HTML结构，创建src/index.html后取消注释）
      // template: "./src/index.html"
    }),
  ],

  // 4. 模式配置（development：开发模式，production：生产模式）
  mode: "development",
  // 核心新增：配置 module 处理 JS/JSX 文件
  module: {
    rules: [
      {
        // 匹配 .js 或 .jsx 文件
        test: /\.(js|jsx)$/,
        // 排除 node_modules（无需编译第三方包）
        exclude: /node_modules/,
        // 使用 babel-loader 编译
        use: {
          loader: "babel-loader",
          // Babel 配置（也可抽离到 .babelrc 或 babel.config.json）
        //   options: {
        //     presets: [
        //       // 预设1：兼容浏览器（按需转译 ES6+ 语法）
        //       "@babel/preset-env",
        //       // 预设2：编译 React/JSX（核心）
        //       [
        //         "@babel/preset-react",
        //         {
        //           // React 17+ 推荐：自动导入 JSX 运行时，无需手动 import React
        //           runtime: "automatic",
        //           // 开发环境保留 React 警告（生产环境自动关闭）
        //           development: process.env.NODE_ENV === "development",
        //         },
        //       ],
        //     ],
        //   },
        },
      },
    ],
  },
  // 新增：解析 JSX 文件（导入时可省略 .jsx 后缀）
  resolve: {
    extensions: [".js", ".jsx"],
  },
};