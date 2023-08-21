import { ButtonPrimary, FormUser, InputUserWithLabel, Spinner, SuccesfulModal } from '@/components';
import { PublicRoutes } from '@/models';
import { CenteredContainer } from '@/utilities';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { registerUser } from '../../services';
import { registerEmptyValues, registerSchema } from '../../utilities';

function RegisterForm() {
  const [emailError, setEmailError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);


  const formik = useFormik({
    initialValues: registerEmptyValues,
    validationSchema: registerSchema,    
    onSubmit: values => registerUser(values, setEmailError, setIsRegistered),
  });

  const { values, errors, isSubmitting, touched } = formik;

  useEffect(() => {
    setEmailError('');
  }, [values])  

  if (isRegistered) {
    return <SuccesfulModal redirect={PublicRoutes.LOGIN} />;
  }
  return (
    <CenteredContainer>
      <FormUser onSubmit={formik.handleSubmit}>
        <InputUserWithLabel
          type='text'
          label='name'
          touched={touched.name}
          error={errors.name}
          {...formik.getFieldProps('name')}
        />
        <InputUserWithLabel
          type='text'
          label='last name'
          touched={touched.lastName}
          error={errors.lastName}
          {...formik.getFieldProps('lastName')}
        />
        <InputUserWithLabel
          type='text'
          label='user name'
          touched={touched.userName}
          error={errors.userName}
          {...formik.getFieldProps('userName')}
        />
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
          error={errors.password}
          {...formik.getFieldProps('password')}
        />
        <InputUserWithLabel
          type='password'
          label='confirm password'
          touched={touched.confirmPassword}
          error={errors.confirmPassword}
          {...formik.getFieldProps('confirmPassword')}
        />
        <ButtonPrimary type='submit'>
          {isSubmitting ? <Spinner size={16} /> : 'Register'}
        </ButtonPrimary>
      </FormUser>
    </CenteredContainer>
  );
}

export default RegisterForm;
