import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";
import { colors } from "../global/colors";


const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const confirmImage = () => {
    dispatch(setCameraImage(image));
    triggerSaveProfileImage({ localId, image });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <Pressable onPress={pickImage}>
            <Text>Tomar otra foto</Text>
          </Pressable>
          <Pressable onPress={confirmImage}>
            <Text style={styles.button}>Confirmar foto</Text>
          </Pressable>
        </>
      ) : (
        <View style={styles.noPhotoContainer}>
          <Text>No hay foto que mostrar...</Text>
          <Text></Text>
          <Pressable onPress={pickImage}>
            <Text style={styles.button}>Tomar foto</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.blue_100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
