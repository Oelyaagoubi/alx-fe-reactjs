import { Formik } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
export const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

// Reusable Formik logic function
export const formikForm = (onSubmit, initialValues) => {
  return Formik({
    initialValues,
    validationSchema,
    onSubmit,
  });
};
