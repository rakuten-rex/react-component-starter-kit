/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
const bundleScss = require('bundle-scss');
const strip = require('strip-comments');
const fs = require('fs');
const prettier = require('prettier');

class BundleSassMixinPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    const { options } = this;
    compiler.hooks.emit.tapAsync(
      { name: 'BundleSassMixinPlugin' },
      async (compilation, callback) => {
        const { name, version } = options;
        const { path } = compilation.options.output;
        const sassFilename = `_styles.mixin.scss`;
        const outputFilename = `${path}/sass/${sassFilename}`;

        await bundleScss('./src/**/*.mixin.scss', outputFilename);

        const original = fs.readFileSync(outputFilename, 'utf8');

        const sassOnlycontent = strip.block(original);

        const content = prettier.format(sassOnlycontent, {
          parser: 'scss',
        });

        const banner = `/*!
* @license ${name} v${version} ${new Date().toISOString().split('T')[0]}
* ${sassFilename}
*
* Copyright (c) 2018-present, Rakuten, Inc.
*
* This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
*/
`;
        const sassFileContent = `${banner}${content}`;

        fs.writeFileSync(outputFilename, sassFileContent);

        callback();
      }
    );
  }
}

module.exports = BundleSassMixinPlugin;
