import { ButtonPrimary, FormUser, InputUserWithLabel, Spinner, SuccesfulModal } from "@/components";
import { User } from "@/interfaces";
import { PrivateRoutes } from "@/models";
import { loadUser } from "@/redux";
import { CenteredContainer } from "@/utilities";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services";
import { loginEmptyValues, loginSchema } from "../../utilities";


function LoginForm() {
  const [user, setUser] = useState<User>();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  
  const formik = useFormik({
    initialValues: loginEmptyValues,
    validationSchema: loginSchema,
    onSubmit: values => loginUser(values, setEmailError, setPasswordError, setUser),
  });
  
  const { values, errors, submitForm, isSubmitting, touched } = formik;

  useEffect(() => {
    if (user) {
      dispatch(loadUser(user))
    }
  }, [user])

  useEffect(() => {
    setEmailError('');
    setPasswordError('');
  }, [values])

  if (user) {
    return <SuccesfulModal redirect={PrivateRoutes.PRIVATE}/>;
  }
  return (
    <CenteredContainer>
      <FormUser onSubmit={(e) => { 
        e.preventDefault();
        submitForm();
      }}>
      <InputUserWithLabel
          type='text'
          label='email'
          touched={touched.email}
          error={errors.email || emailError}
          {...formik.getFieldProps('email')}
        />
        <InputUserWithLabel
          type='password'
          label='password'
          touched={touched.password}
          error={errors.password || passwordError}
          {...formik.getFieldProps('password')}
        />
        <ButtonPrimary type='submit'>
          {isSubmitting ? <Spinner size={16} /> : 'Login'}
        </ButtonPrimary>
      </FormUser>
    </CenteredContainer>
  )   
}

export default LoginForm;