import * as Yup from "yup";

export const RegisterSchema = Yup.object({
firstName : Yup.string().min(2).max(25).required('Please Enter a Name'),
lastName : Yup.string().min(2).max(25).required('Please Enter a Last Name'),
email : Yup.string().email().required("Please Enter your Email"),
password : Yup.string().min(6).max(8).required('Password is Required'),
confirmPassword : Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], "Passwords must match")
})