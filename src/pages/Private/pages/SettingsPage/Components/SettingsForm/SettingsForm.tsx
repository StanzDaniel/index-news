import { ButtonPrimary, FormUser, InputUserWithLabel, Spinner, SuccesfulModal } from "@/components";
import { User } from "@/interfaces";
import { PrivateRoutes } from "@/models";
import { SetImageModal } from "@/pages/Private/components";
import { CenteredContainer } from "@/utilities";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateUser } from "../../services";
import { updateEmptyValues, updateSchema } from "../../utilities";


function SettingsForm() {
  const [isUpdated, setIsUpdated] = useState(false);

  const user: User = useSelector((store: any) => store.user)


  const formik = useFormik({
    initialValues: updateEmptyValues,
    validationSchema: updateSchema,    
    onSubmit: data => updateUser(data, setIsUpdated),
  });

  const { errors, isSubmitting, touched } = formik;

  useEffect(() => {
  }, [isUpdated])

  if (isUpdated) {
    return <SuccesfulModal redirect={PrivateRoutes.PRIVATE} />;
  }
  return (
    <CenteredContainer>
      <FormUser onSubmit={formik.handleSubmit}>
        <InputUserWithLabel
          type='text'
          label='name'
          placeholder={user.name}
          touched={touched.name}
          error={errors.name}
          {...formik.getFieldProps('name')}
        />
        <InputUserWithLabel
          type='text'
          label='last name'
          placeholder={user.lastName}
          touched={touched.lastName}
          error={errors.lastName}
          {...formik.getFieldProps('lastName')}
        />
        <InputUserWithLabel
          type='text'
          label='user name'
          placeholder={user.userName}
          touched={touched.userName}
          error={errors.userName}
          {...formik.getFieldProps('userName')}
        />
        <InputUserWithLabel
          type='password'
          label='new password'
          touched={touched.password}
          error={errors.password}
          {...formik.getFieldProps('password')}
        />
        <InputUserWithLabel
          type='password'
          label='confirm new password'
          touched={touched.confirmPassword}
          error={errors.confirmPassword}
          {...formik.getFieldProps('confirmPassword')}
        />
        <SetImageModal />
        <ButtonPrimary type='submit'>
          {isSubmitting ? <Spinner size={16} /> : 'Update'}
        </ButtonPrimary>
      </FormUser>
    </CenteredContainer>
  );
}

export default SettingsForm;