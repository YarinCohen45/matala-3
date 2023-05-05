
// import React, { useEffect } from "react";
import React, { useContext, useEffect } from "react";
import { AuthenticatedUserContext } from "../App";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
// import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from "../colors";
import { Entypo } from "@expo/vector-icons";
// const favicon = require("../assets/favicon.png");

const Home = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <FontAwesome5 
  //       name="map-marked-alt" 
  //       size={24} 
  //       color="black" />
  //       // <FontAwesome
  //       //   name="search"
  //       //   size={24}
  //       //   color={colors.gray}
  //       //   style={{ marginLeft: 15 }}
  //       // />
  //     ),
  // //     headerRight: () => (
  // //       <Image
  // //         source={favicon}
  // //         style={{
  // //           width: 40,
  // //           height: 40,
  // //           marginRight: 15,
  // //         }}
  // //       />
  // //     ),
  //   });
  // }, [navigation]);

  const { user } = useContext(AuthenticatedUserContext);

  console.log(JSON.stringify(user));

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Login")}
        // onPress={() => alert(JSON.stringify(user))}
        style={styles.logoutButton}
      >
      <MaterialIcons name="logout" size={30} color="black" />
    </TouchableOpacity>


    <Text style={styles.text}>{user.displayName} ,כיף שחזרת</Text>
    

      <TouchableOpacity
        onPress={() => navigation.navigate("Map")}
        style={styles.mapButton}
      >
        <FontAwesome5 name="map-marked-alt" size={24} color="black" />
      </TouchableOpacity>
    </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },

  mapButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
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
    marginBottom: 50,
  },

  logoutButton:{
    height: 300,
    width: 50,
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
    height:490,
    width: 300,
    fontSize:30,
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
  
});




















// /**
//  * @abstract Our home app screen
//  */

// import React, { useContext, useEffect } from "react";
// import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontAwesome } from "@expo/vector-icons";
// import { Entypo } from "@expo/vector-icons";
// import { AuthenticatedUserContext } from "../../test/App";
// const dogImage = require("../assets/icon.png");

// const Home = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     navigation.setOptions({
//       headerLeft: () => (
//         <FontAwesome
//           name="search"
//           size={24}
//           // color={colors.gray}
//           style={{ marginLeft: 15 }}
//         />
//       ),
//       headerRight: () => (
//         <Image
//           source={dogImage}
//           style={{
//             width: 40,
//             height: 40,
//             marginRight: 15,
//           }}
//         />
//       ),
//     });
//   }, [navigation]);

//   const { user, setUser } = useContext(AuthenticatedUserContext);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         onPress={() => navigation.navigate("Chat")}
//         style={styles.chatButton}
//       >
//         <Text>{user}</Text>
//         <Entypo name="chat" size={24} color={/*colors.lightGray*/ 'white'} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "flex-end",
//     backgroundColor: "#fff",
//   },
//   chatButton: {
//     // backgroundColor: colors.primary,
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//     alignItems: "center",
//     justifyContent: "center",
//     // shadowColor: colors.primary,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.9,
//     shadowRadius: 8,
//     marginRight: 20,
//     marginBottom: 50,
//   },
// });