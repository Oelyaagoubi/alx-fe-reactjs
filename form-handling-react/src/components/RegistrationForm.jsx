import {FormikForm} from './formikForm';

const RegistrationForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm(); // Reset the form after successful submission
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <FormikForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationForm;
