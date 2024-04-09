import { Text, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../global/colors";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

/* Esta función 'Header' es un componente de React Native que renderiza un encabezado personalizado para una aplicación móvil.
Toma una propiedad de 'título' como entrada y la muestra en el encabezado junto con algunos iconos. 
*/
function Header({ title }) {

  const { localId, user } = useSelector((state) => state.authReducer.value);
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <Entypo name="classic-computer" size={24} color="white" />
      <Text style={styles.text}>PC Store</Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 30}}>
      <MaterialCommunityIcons name="web-box" size={28} color="white" />
      <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.container}>
      {user && (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={22} color="white" />
        </Pressable>
      )}
    </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: "100%",
    backgroundColor: colors.green_400,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily: 'PoppinsBold'
  },
  logoutIcon:{
    marginLeft: 60
  }
});
