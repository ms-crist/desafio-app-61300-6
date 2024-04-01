import { object, string, ref } from "yup";

/* 
 Este fragmento de código define un esquema de validación para un formulario de 
 inicio de sesión mediante la biblioteca Yup */

export const loginSchema = object().shape({
  email: string().required("Email es campo obligatorio").email("No es un email válido"),
  password: string()
    .required("Password es campo obligatorio")
    .min(6, "Password debe tener al menos 6 caracteres"),
});


