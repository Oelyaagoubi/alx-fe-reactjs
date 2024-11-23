import React, { useState } from 'react';
import { formikForm } from './formikForm';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    setUsername(values.username);
    setEmail(values.email);
    setPassword(values.password);
  };

  // Use the formikForm function
  const formik = formikForm(handleSubmit, { username, email, password });

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter your username"
          />
          {formik.touched.username && formik.errors.username && (
            <div>{formik.errors.username}</div>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </form>

      <div>
        <h3>Form Values:</h3>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
};

export default RegistrationForm;
