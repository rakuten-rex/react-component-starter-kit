/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');

class CssVarsTransformPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      { name: 'CssVarsTransformPlugin' },
      async (compilation, callback) => {
        const { assets } = compilation;
        const cssFileList = this.getCssFileList(assets);
        cssFileList.forEach(cssFile => {
          const { name, content } = cssFile;
          const { css } = postcss([cssvariables()]).process(content);

          const cssStaticFilename = name.replace('.production.min', '.static');
          const cssContent = css.replace('.production.min', '.static');

          // Insert this list into the webpack build as a new file asset:
          compilation.assets[cssStaticFilename] = {
            source: function() {
              return cssContent;
            },
            size: function() {
              return cssContent.length;
            },
          };
        });

        callback();
      }
    );
  }

  getCssFileList(assets) {
    const cssFileList = [];

    for (const key in assets) {
      if (key.includes('.css')) {
        cssFileList.push({
          name: key,
          content: assets[key]._value,
          isMinified: key.includes('.min.css'),
        });
      }
    }

    return cssFileList;
  }
}

module.exports = CssVarsTransformPlugin;
