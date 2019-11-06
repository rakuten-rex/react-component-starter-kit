import React from 'react';
import { string } from 'prop-types';
import { composeClassName } from 'rex-react-utils';
import './FormInputLabel.scss';

export default function FormInputLabel({ htmlFor, label, className }) {
  const classes = composeClassName(['rex-core-label', 'form-label', className]);

  return (
    <label htmlFor={htmlFor} {...classes}>
      {label}
    </label>
  );
}

FormInputLabel.defaultProps = {
  htmlFor: '',
  label: '',
  className: '',
};

FormInputLabel.propTypes = {
  htmlFor: string,
  label: string,
  className: string,
};
