const registerOptions = {
  full_name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'must be at least 2 characters',
    },
  },
  username: {
    required: 'username is required',
    minLength: {
      value: 2,
      message: 'must be at least 2 characters',
    },
  },
  country: {
    required: 'country is required',
  },
  email: {
    required: 'Email is required',
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must have at least 6 characters',
    },
  },
  confirmPassword: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must have at least 6 characters',
    },
  },
  phone: {
    required: 'Phone is required',
    minLength: {
      value: 4,
      message: 'Phone must have at least 4 characters',
    },
  },
};

export default registerOptions;
