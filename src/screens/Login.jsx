import { StyleSheet, Text, View, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/inputForm";
import SubmitButton from "../components/submitButton";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { colors } from "../global/colors";


/** 
 * * El componente 'Login' maneja la funcionalidad de inicio de sesión del usuario, incluido el formulario de ingreso de datos,
 * la validación y activación del login mutation.
 * @returns Devuelve el componente 'Login'. Consiste en una vista que contiene un elemento de texto
 * para loguearse en el sistema, dos formularios de entrada para correo electrónico y contraseña con manejo de errores, un pressable para
 * navegar a la pantalla de registro y un botón de envío basado en el estado de carga del resultado del login mutation.
 */
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  const onSubmit = () => {
    try {
      loginSchema.validateSync({ password, email });
      triggerSignin({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Password"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text>Ir al registro</Text>
      </Pressable>
      {result.isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <SubmitButton title={"Login"} onPress={onSubmit} />
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green_300,
        gap: 15,
        paddingVertical: 20, 
        borderRadius: 10,
    },
    title: {
        fontSize: 14,
        fontFamily: 'PoppinsRegular',
        color: colors.white_200
    }
});