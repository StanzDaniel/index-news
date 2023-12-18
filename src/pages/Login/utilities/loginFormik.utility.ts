import * as Yup from "yup";

export const loginEmptyValues = {
  email: '',
  password: '',
};

export const loginSchema = Yup.object({
  email: Yup.string()
    .required('email is required')
    .email('please enter a valid email'),
  password: Yup.string()
    .required('password is required')
    .min(8, 'password must be at least 8 characters'),
});