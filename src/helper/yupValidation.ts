import * as yup from 'yup';

export const loginValidation = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password required').trim(),
});

export const signUp = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),

  password: yup
    .string()
    .required('Password required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  confirmPassword: yup
    .string()
    .required('Confirm password required')
    .trim()
    .oneOf([yup.ref('password')], 'Should match password'),
});
