import postcss from 'postcss';
import cssvariables from 'postcss-css-variables';

export default function cssVarsToLegacy(customStyle) {
  const styleProps = Object.entries(customStyle)
    .map(([key, value]) => `${key}: ${value}`)
    .join(';');

  const customStyleHTML = `{${styleProps}}`;
  const { innerText } = document.getElementById('rex-styles-storybook');
  const { css } = postcss([cssvariables()]).process(
    `${innerText}${customStyleHTML}`
  );

  return css;
}
