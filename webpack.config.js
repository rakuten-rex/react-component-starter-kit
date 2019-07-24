const webpack = require('webpack');
const merge = require('webpack-merge');
const pathResolve = require('path').resolve;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { readFileSync } = require('fs');
const packageInfo = require('./package.json');

const libraryName = packageInfo.name
  .toLowerCase()
  .replace('@rakuten-rex/', 'rakuten-rex-')
  .replace(/(-)\w/g, m => m.toUpperCase().replace(/-/, ''));
const packageNameOnly = packageInfo.name.replace('@rakuten-rex/', '');
const pathSrc = pathResolve('./src');
const pathNodeModules = pathResolve('./node_modules');
const pathRoot = pathResolve('./');

// Webpack entry and output settings
const entry = {};
// Default outputs
entry.index = './src/index.jsx';
entry['without-fonts'] = './src/without-fonts.jsx';
entry['without-core'] = './src/without-core.jsx';
// Custom outputs

// Webpack config
const mode = 'production';
const name = 'production.config';
const filename = `[name].production.min`;
const filenameJS = `${filename}.js`;
const filenameCSS = `${filename}.css`;

const output = {
  path: pathResolve(__dirname, `node_modules/${packageInfo.name}`),
  publicPath: '/',
  filename: filenameJS,
  chunkFilename: filenameJS,
  library: libraryName,
  libraryTarget: 'umd',
  umdNamedDefine: true,
  jsonpFunction: `${libraryName}OnDemand`,
};

// Eslint
const eslintLoader = {
  enforce: 'pre',
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    fix: true,
  },
};

// Babel support for ES6+
const babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

// Creates style nodes from JS strings
const extracCssLoader = {
  loader: MiniCssExtractPlugin.loader,
};

// Translates CSS into CommonJS
const cssLoader = {
  loader: 'css-loader',
};

// Compiles Sass to CSS
const sassLoader = {
  loader: 'sass-loader',
};

// Styles loader for Css and Sass
const stylesLoader = {
  test: /\.(css|scss)$/,
  use: [extracCssLoader, cssLoader, sassLoader],
};

const fileLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: ['file-loader'],
};

// Resolve extenstions for JS and JSX
const resolve = {
  extensions: ['*', '.js', '.jsx'],
  modules: [pathSrc, pathNodeModules],
};

// Use React as external library from CDN
const externals = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
    umd: 'react',
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom',
    umd: 'react-dom',
  },
};

// Webpack Plugins:
// Clean build folder
const cleanBuildPlugin = new CleanWebpackPlugin();

// Extract CSS from javascript bundle
const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: filenameCSS,
  chunkFilename: filenameCSS,
});

// Google Closure compiler instead of uglify
const googleClosureCompiler = new ClosureCompiler({
  options: {
    compilationLevel: 'SIMPLE',
    languageIn: 'ECMASCRIPT5_STRICT',
    languageOut: 'ECMASCRIPT5_STRICT',
    warningLevel: 'QUIET',
    applyInputSourceMaps: false,
    useTypesForOptimization: false,
    processCommonJsModules: false,
    rewritePolyfills: false,
  },
});

// Optimize css output
const optimizeCss = new OptimizeCSSAssetsPlugin({
  cssProcessorOptions: {
    discardComments: {
      removeAll: false,
    },
  },
});

// NPM settings
const npmIndexList = Object.keys(entry).map(item => {
  return {
    from: './npm/index.tpl',
    to: `${item}.js`,
    transform(content) {
      return content.toString().replace(/__COMPONENT_NAME__/g, item);
    },
  };
});

const npmIndexJSPlugin = new CopyWebpackPlugin(npmIndexList);

const npmReadmePlugin = new CopyWebpackPlugin([
  {
    from: './markdown/README.md',
    to: `README.md`,
    transform(content) {
      return content
        .toString()
        .replace(/__INFO_HOW_TO__/g, '')
        .replace(/__REX_CORE_NAME__/g, 'core')
        .replace(
          /__REX_CORE_VERSION__/g,
          packageInfo.dependencies['@rakuten-rex/core'].replace('^', '')
        )
        .replace(/__COMPONENT_NAME__/g, packageNameOnly)
        .replace(/__VERSION__/g, packageInfo.version);
    },
  },
]);

const npmPackagePlugin = new CopyWebpackPlugin([
  {
    from: './npm/package.tpl',
    to: `package.json`,
    transform(content) {
      return content
        .toString()
        .replace(/__COMPONENT_NAME__/g, packageNameOnly)
        .replace(/__VERSION__/g, packageInfo.version)
        .replace(/__DESCRIPTION__/g, packageInfo.description)
        .replace(/__REACT_VERSION__/g, packageInfo.dependencies.react)
        .replace(
          /__REACT_DOM_VERSION__/g,
          packageInfo.dependencies['react-dom']
        );
    },
  },
]);

const npmCssIndexList = Object.keys(entry).map(item => {
  return {
    from: './npm/css/index.tpl',
    to: `css/${item}.js`,
    transform(content) {
      return content.toString().replace(/__COMPONENT_NAME__/g, item);
    },
  };
});

const npmCssIndexJSPlugin = new CopyWebpackPlugin(npmCssIndexList);

// Current project README file
const readmeHowTo = readFileSync('markdown/INFO_HOW_TO.md', 'utf8');
const mdReadmePlugin = new CopyWebpackPlugin([
  {
    from: './markdown/README.md',
    to: `${pathRoot}/README.md`,
    transform(content) {
      return content
        .toString()
        .replace(/__INFO_HOW_TO__/g, readmeHowTo)
        .replace(/__REX_CORE_NAME__/g, 'core')
        .replace(
          /__REX_CORE_VERSION__/g,
          packageInfo.dependencies['@rakuten-rex/core'].replace('^', '')
        )
        .replace(/__COMPONENT_NAME__/g, packageNameOnly)
        .replace(/__VERSION__/g, packageInfo.version);
    },
  },
]);

// License
const npmLicencePlugin = new CopyWebpackPlugin([
  {
    from: './LICENSE',
  },
]);

// Copyright
const copyrightDate = new Date().toISOString().split('T')[0];
const copyright = `
@license ${packageInfo.name} v${packageInfo.version} ${copyrightDate}
[file]

Copyright (c) 2018-present, Rakuten, Inc.

This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.`;

const bannerPlugin = new webpack.BannerPlugin({
  banner: copyright,
});

// Webpack common config
const webpackConfig = {
  mode,
  name,
  entry,
  output,
  module: {
    rules: [babelLoader, eslintLoader, stylesLoader, fileLoader],
  },
  resolve,
  externals,
  plugins: [bannerPlugin],
  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [googleClosureCompiler, optimizeCss],
  },
};

// Webpack production config for NPM
const production = merge(webpackConfig, {
  plugins: [
    cleanBuildPlugin,
    cssExtractPlugin,
    npmIndexJSPlugin,
    npmReadmePlugin,
    npmPackagePlugin,
    npmLicencePlugin,
    npmCssIndexJSPlugin,
    mdReadmePlugin,
  ],
});

// Webpack development config for NPM
const modeDev = 'development';
const nameDev = 'development.config';
const filenameDev = `[name].development`;
const filenameJSDev = `${filenameDev}.js`;
const filenameCSSDev = `${filenameDev}.css`;
const outputDev = {
  filename: filenameJSDev,
  chunkFilename: filenameJSDev,
};

const cssExtractPluginDev = new MiniCssExtractPlugin({
  filename: filenameCSSDev,
  chunkFilename: filenameCSSDev,
});

const development = merge(webpackConfig, {
  mode: modeDev,
  name: nameDev,
  output: outputDev,
  externals,
  plugins: [cssExtractPluginDev],
  optimization: {
    minimize: false,
  },
});

// Webpack export config
module.exports = [production, development];
