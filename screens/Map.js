
import React, { useState } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function Map({navigation}) {
  const [pin, setPin] = useState({
    latitude: 32.103376857642246,
    longitude: 35.20905301042528,
  });

  const [region, setRegion] = useState({
    latitude: 32.103376857642246,
    longitude: 35.20905301042528,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Home")}
        style={styles.logoutButton}
        >
        <MaterialIcons name="logout" size={30} color="black" />
      </TouchableOpacity>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: "AIzaSyCQQ3w8YmeA9k8ZGzYnTRUljQhX3YqO3VI",
          language: "en",
          // components: "country: us",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude},${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView
        style={styles.map}
        // 32.103376857642246, 35.20905301042528
        initialRegion={{
          latitude: 32.103376857642246,
          longitude: 35.20905301042528,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google" // for google maps insted of default map of the phone
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        /> 
        <Marker
          coordinate={pin}
          pinColor="red"
          draggable={true}
          onDragStart={(event) => {
            console.log("Drag start", event.nativeEvent.coordinate);
          }}
          onDragEnd={(event) => {
            setPin({
              latitude: event.nativeEvent.coordinate.latitude,
              longitude: event.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>I'm Here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={500}></Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
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
});