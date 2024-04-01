import {StyleSheet, Text, View} from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/inputForm";
import { colors } from "../global/colors";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import SubmitButton from "../components/submitButton";


const Signup = () => {
    
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  /*
  Este fragmento de código es un componente funcional que representa un formulario de registro que tiene manejo de errores,
  en los formularios y al enviar la información a través de un dispatch de redux */

  
  const dispatch = useDispatch();
    const onSubmit = () => {
        
        try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ password, confirmPassword, email });
      triggerSignup({ email, password });
        } catch (err) {
            switch (err.path) {
              case "email":
                setErrorMail(err.message);
                break;
              case "password":
                setErrorPassword(err.message);
                break;
              case "confirmPassword":
                setErrorConfirmPassword(err.message);
                break;
              default:
                break;
        }
    }

};

    useEffect(()=> {
        if(result.data){
            dispatch(setUser(result))
        }
    }, [result])

return (
    <View style={styles.main}>
    <View style={styles.container}>
        <Text style={styles.title}>Registrarse</Text>
        <InputForm label={"Email"} error={errorMail} onChange={setEmail}/>
        <InputForm label={"Contraseña"} error={errorPassword} onChange={setPassword} isSecure={true}/>
        <InputForm label={"Confirmar contraseña"} error={errorConfirmPassword} onChange={setConfirmPassword} isSecure={true}/>
        <SubmitButton title={"Registrarse"} onPress={onSubmit}/>
    </View>
    </View>
    );

};

export default Signup;

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
        backgroundColor: colors.white_200,
        gap: 15,
        paddingVertical: 20, 
        borderRadius: 10,
    },
    title: {
        fontSize: 14,
        fontFamily: 'PoppinsRegular',
        color: colors.green_400
    }
})