import * as Yup from 'yup';

export const registerEmptyValues = {
  name: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const registerSchema = Yup.object({
  name: Yup.string().required('name is required'),
  lastName: Yup.string().required('last name is required'),
  userName: Yup.string().required('user name is required'),
  email: Yup.string()
    .required('email is required')
    .email('please enter a valid email'),
  password: Yup.string()
    .required('password is required')
    .min(8, 'password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .required('please confirm your password')
    .oneOf([Yup.ref('password')], 'passwords must match'),
});