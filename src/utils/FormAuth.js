import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Input, Select } from '@chakra-ui/react';

const FormInput = forwardRef(
  ({ type, name, required, label, placeholder, ...props }, ref) => {
    return (
      <>
        {label ? (
          <label htmlFor={name}>
            {label} <span> {required && '*'}</span>
          </label>
        ) : null}
        <Input
          {...props}
          name={name}
          id={name}
          placeholder={placeholder}
          type={type}
          ref={ref}
          mb={2}
        />
      </>
    );
  }
);

const SelectInput = forwardRef(
  ({ type, name, required, label, placeholder, ...props }, ref) => {
    return (
      <>
        {label ? (
          <label htmlFor={name}>
            {label} <span> {required && '*'}</span>
          </label>
        ) : null}
        <Select
          {...props}
          name={name}
          id={name}
          placeholder={placeholder}
          type={type}
          ref={ref}
          mb={2}
        />
      </>
    );
  }
);

const formOutput = {FormInput, SelectInput}

export default formOutput

formOutput.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
  register: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

formOutput.defaultProps = {
  type: 'text',
  name: 'text',
  label: '',
  placeholder: '',
};
