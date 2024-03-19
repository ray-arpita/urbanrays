import React from "react";
import "./register.css";
import bannerImage from "../../assets/other_images/banner1.jpg";
import { useFormik } from "formik";
import { RegisterSchema } from "../../schema";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { values, handleChange, handleBlur, errors, handleSubmit , touched } = useFormik({
    initialValues: initialValues,
    validationSchema : RegisterSchema,
    onSubmit: (values) => {
      console.log(values, "<<< values");
    },
  });

console.log(errors)

  return (
    <div className="registration-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="firstName" className="input-label">
              Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter Your First Name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName ? <p className="form-error">{errors?.firstName}</p> : null}
          </div>
          <div className="input-block">
            <label htmlFor="lastName" className="input-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Your Last Name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName ? <p className="form-error">{errors.lastName}</p> : null}
          </div>
          <div className="input-block">
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p className="form-error">{errors.email}</p> : null}
          </div>
          <div className="input-block">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? <p className="form-error">{errors.password}</p> : null}
          </div>
          <div className="input-block">
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword ? <p className="form-error">{errors.confirmPassword}</p> : null}
          </div>
          <div className="button-wrapper">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
      <div className="right-container">
        <div className="image-container">
          <img src={bannerImage} className="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default Register;
