import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

const MyProfile = ({ navigation }) => {
  //const image = useSelector((state) => state.authReducer.imageCamera)
  const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);

  return (
    <View style={styles.container}>
      {profileImage || imageCamera ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <>
          <Image
            source={require("../../assets/defaultProfile.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </>
      )}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Image Selector")}
      >
        <Text style={styles.text}>Tomar foto perfil</Text>
      </Pressable>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.blue_100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    color: "white",
  },
});
