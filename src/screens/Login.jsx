import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import InputForm from "../components/inputForm";
import { colors } from "../global/colors";


const Login = () => {
    const onChange = () => {};

return (
    <View style={styles.main}>
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <InputForm label={"Email"} error={""} onChange={onChange}/>
        <InputForm label={"Password"} error={""} onChange={onChange}/>
        <Pressable>
            <Text>Login</Text>
        </Pressable>
    </View>
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