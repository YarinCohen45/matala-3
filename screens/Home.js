import React, { useContext } from "react";
import { AuthenticatedUserContext } from "../App";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from "../colors";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const navigation = useNavigation();

  const { user } = useContext(AuthenticatedUserContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'column', width: '100%', justifyContent: 'flex-start'}}>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Login")}
          style={styles.logoutButton}
        >
          <SimpleLineIcons name="logout" size={30} color={colors.primary} />
        </TouchableOpacity>

        <Text style={styles.text}>{user.displayName} ,כיף שחזרת</Text>

        <Image source={require('../assets/black-outlined-heart.png')} style={{resizeMode: 'contain', alignSelf: 'center', width: 200, height: 200}}/>
      </View>
    
      <TouchableOpacity
        onPress={() => navigation.navigate("Map")}
        style={styles.mapButton}
      >
        <FontAwesome5 name="map-marked-alt" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  mapButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignSelf: 'flex-end',
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    marginRight: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginBottom: 30
  },

  logoutButton:{
    height: 50,
    width: 50,
    alignSelf: 'flex-start',
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    marginRight:10,
    marginBottom: 5,
  },

  text:{
    fontSize: 40,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    fontWeight: 'bold',
    marginTop: 50,
    alignSelf: 'center'
  },
});