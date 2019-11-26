/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, func, element, oneOfType, arrayOf } from 'prop-types';
import './Button.scss';

export default function Button({
  children,
  onClick,
  title,
  className,
  ...props
}) {

  return (
    <div className={className} onClick={onClick} role="presentation" {...props}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

Button.defaultProps = {
  children: null,
  title: 'Hello World',
  className: 'rex-button',
  onClick: () => null,
};

Button.propTypes = {
  children: oneOfType([string, element, arrayOf(element)]),
  title: string,
  className: string,
  onClick: func,
};
