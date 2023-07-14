import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .test("is-gmail", "Only Gmail addresses are allowed", (value) => {
      // Regular expression to validate Gmail email address
      const regex = /^[a-zA-Z0-9_.+-]+@gmail.com$/;
      return regex.test(value);
    })
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});
