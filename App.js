import { View, ActivityIndicator } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Map from "./screens/Map";


const Stack = createStackNavigator();//עוברים בין מסכי באמצעות לחיצת כפתור
export const AuthenticatedUserContext = createContext({});//מסגרת למשתנים גלובליים

/**
 * For checking if we have a user or not
 */
const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator
      defaultScreenOptions={Login}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Map" component={Map}/>
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
    });
    
    setLoading(false);

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
