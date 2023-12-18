import * as Yup from 'yup';

export const updateEmptyValues = {
  name: '',
  lastName: '',
  userName: '',
  password: '',
  confirmPassword: '',
};

export const updateSchema = Yup.object({
  name: Yup.string(),
  lastName: Yup.string(),
  userName: Yup.string(),
  password: Yup.string()
    .min(8, 'password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords must match'),
});