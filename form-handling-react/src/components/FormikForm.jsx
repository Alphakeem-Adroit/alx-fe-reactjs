import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Submit handler
  const onSubmit = (values, { resetForm }) => {
    console.log("Submitted Data:", values);

    alert("Registration successful!");
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {/* Username */}
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <Field type="text" name="username" />
            <ErrorMessage
              name="username"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
          </div>

          <br />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
