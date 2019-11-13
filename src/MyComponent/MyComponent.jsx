/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, func, element, oneOfType, arrayOf } from 'prop-types';
import MyImage from './assets/Image.jpg';
import './MyComponent.scss';

export default function MyComponent({
  children,
  onClick,
  title,
  text,
  className,
  ...props
}) {
  return (
    <div className={className} onClick={onClick} role="presentation" {...props}>
      <img src={MyImage} alt="Basic example" style={{ width: '100%' }} />
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </div>
  );
}

MyComponent.defaultProps = {
  children: null,
  title: 'Hello World',
  text: 'This is a basic example',
  className: 'rex-my-component',
  onClick: () => null,
};

MyComponent.propTypes = {
  children: oneOfType([string, element, arrayOf(element)]),
  title: string,
  text: string,
  className: string,
  onClick: func,
};
