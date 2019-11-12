const webpack = require('webpack');
const path = require('path');
const del = require('del');
const cssnano = require('cssnano');
// Webpack Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Package Information and filenames
const { name, version } = require('./package.json');

const libraryName = name
  .toLowerCase()
  .replace('@rakuten-rex/', 'rakuten-rex-')
  .replace(/(-)\w/g, m => m.toUpperCase().replace(/-/, ''));
// const packageName = name.replace('@rakuten-rex/', '');

// Webpack Config for Production mode
const config = {
  // Build mode
  mode: 'production',
  name: 'production.config',
  // Entry for component under ./src folder
  entry: {
    index: './src/MyComponent/index.jsx',
  },
  // Output config to build the static assets JavaScript, CSS, etc.
  output: {
    path: path.resolve(__dirname, `node_modules/${name}`),
    publicPath: '/',
    filename: '[name].production.min.js',
    chunkFilename: '[name].production.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: `${libraryName}OnDemand`,
  },
  // Loaders for Babel, CSS, SASS, Files (SVG, PNG, etc.)
  module: {
    rules: [
      // Babel support for ES6+
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // ESlint
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      // Styles loader for Css and Sass
      {
        test: /\.(css|scss)$/,
        use: [
          // Creates style nodes from JS strings and extract content to .css file
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(svg)$/,
        use: ['@svgr/webpack'],
      },
      // Load Files like WebFonts, SVG, PNG, etc.
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  // Resolve extenstions for JS and JSX
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  // Use React as external library from CDN or Global Window object
  externals: {
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
  },
  plugins: [
    // Copyright
    new webpack.BannerPlugin({
      banner: `
@license ${name} v${version} ${new Date().toISOString().split('T')[0]}
[file]

Copyright (c) 2018-present, Rakuten, Inc.

This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.`,
    }),
    // Extract CSS from javascript bundle
    new MiniCssExtractPlugin({
      filename: '[name].production.min.css',
      chunkFilename: '[name].production.min.css',
    }),
    // Licence
    new CopyWebpackPlugin([{ from: './LICENSE' }]),
  ],
  // Build optimizations
  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [
      // Google Closure compiler instead of TerserJS
      new ClosureCompiler({
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
      }),
      // Optimize css output
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAllButFirst: true,
              },
              cssDeclarationSorter: {
                order: 'alphabetically',
              },
            },
          ],
        },
      }),
    ],
  },
};

const configDev = {
  ...config,
  mode: 'development',
  name: 'development.config',
  output: {
    ...config.output,
    filename: '[name].development.js',
    chunkFilename: '[name].development.js',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    // Copyright
    new webpack.BannerPlugin({
      banner: `
@license ${name} v${version} ${new Date().toISOString().split('T')[0]}
[file]

Copyright (c) 2018-present, Rakuten, Inc.

This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.`,
    }),
    // Extract CSS from javascript bundle
    new MiniCssExtractPlugin({
      filename: '[name].development.css',
      chunkFilename: '[name].development.css',
    }),
    // Optimize css output
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            cssDeclarationSorter: {
              order: 'alphabetically',
            },
          },
        ],
      },
    }),
  ],
};

// Clean build folder for multiple webpack configs (dev, prod) instead of CleanWebpackPlugin
del.sync([path.resolve(config.output.path, '**/*')]);

// Export webpack config (prod, dev)
module.exports = [config, configDev];
