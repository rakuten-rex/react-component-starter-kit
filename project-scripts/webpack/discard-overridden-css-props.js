/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
const css2json = require('css2json');

class DiscardOverriddenCssPropsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      { name: 'DiscardOverriddenCssPropsPlugin' },
      (compilation, callback) => {
        const { assets } = compilation;
        const cssFileList = this.getCssFileList(assets);

        cssFileList.forEach(css => {
          const { name, content, isMinified } = css;
          const { comment, cssJSONFormat } = this.convertCssToJson(content);
          const cleanedCSS = this.convertJsonToCss(
            comment,
            cssJSONFormat,
            isMinified
          );

          compilation.assets[name] = {
            source() {
              return cleanedCSS;
            },
            size() {
              return cleanedCSS.length;
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
      if (key.includes('.css') && !key.includes('static.css')) {
        cssFileList.push({
          name: key,
          content: assets[key]._value,
          isMinified: key.includes('.min.css'),
        });
      }
    }

    return cssFileList;
  }

  // Convert CSS to JSON and auto-removal of duplicated keys due to Array output
  convertCssToJson(content) {
    let comment = '';
    let cssOnly = content;

    if (content.includes('/*!')) {
      const commentLimit = content.indexOf('*/');
      comment = content.slice(0, commentLimit + 2);
      cssOnly = content.slice(commentLimit + 2);
    }

    const cssJSONFormat = css2json(cssOnly);

    return {
      comment,
      cssJSONFormat,
    };
  }

  convertJsonToCss(comment, cssJSONFormat, isMinified) {
    const cssStyles = [];
    const spacingClassName = isMinified ? '' : '\n';
    const spacingBracketIn = isMinified ? '' : '\t';
    const spacingProp = isMinified ? '' : '\n\t';
    const spacingPropValue = isMinified ? '' : ' ';
    const spacingBracketOut = isMinified ? '' : '\n';

    for (const className in cssJSONFormat) {
      cssStyles.push(`${spacingClassName}${className}`);
      cssStyles.push(`${spacingBracketIn}{`);

      const propList = cssJSONFormat[className];
      const cssProps = [];

      for (const prop in propList) {
        const propValue = `${spacingProp}${prop}:${spacingPropValue}${propList[prop]}`;
        cssProps.push(propValue);
      }

      cssStyles.push(cssProps.join(';'));
      cssStyles.push(`${spacingBracketOut}}${spacingBracketOut}`);
    }

    const discardOverriddenProps = cssStyles.join('');
    const cleanedCSS = `${comment}${discardOverriddenProps}`;

    return cleanedCSS;
  }
}

module.exports = DiscardOverriddenCssPropsPlugin;
