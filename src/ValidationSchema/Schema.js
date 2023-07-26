import * as Yup from "yup";

// Login InitialValues //
export const SignUpInitialValues = {
  email: "",
  password:"",
  name:"",
  tc:""
};

// LoginvalidationSchema component //

export const SignUpValidationSchema= Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Required!"),
  password: Yup.string()
    .required("Password Required!"),
    name: Yup.string()
    .required("Name Required!"),
    tc: Yup.string()
    .required("Please accept t&c for next!"),
});


// Login InitialValues //
export const SignInInitialValues = {
    email: "",
    password:"",
  };
  
  // LoginvalidationSchema component //
  
  export const SignInValidationSchema= Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required!"),
    password: Yup.string()
      .required("Password Required!"),
  });
  