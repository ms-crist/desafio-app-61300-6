import { object, string, ref } from "yup";

/* 
 Este fragmento de código define un esquema de validación para un formulario de 
 registro mediante la biblioteca Yup */

export const signupSchema = object().shape({
  email: string().required("Email es campo obligatorio").email("No es un email válido"),
  password: string()
    .required("Password es campo obligatorio")
    .min(6, "Password debe tener al menos 6 caracteres"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Password debe coincidir")
    .required(),
});
