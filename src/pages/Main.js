import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Image, View, Text, StyleSheet } from 'react-native';

const Main = () => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      Geolocation.getCurrentPosition(
        info => {
          const { coords } = info;
          const { latitude, longitude } = coords;

          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04,
          });
        },
        () => {},
        {
          enableHighAccuracy: true,
        },
      );
    }

    loadInitialPosition();
  }, []);

  if (!region) {
    return null;
  }

  return (
    <MapView style={{ flex: 1 }} initialRegion={region}>
      <Marker coordinate={{ latitude: 37.785834, longitude: -122.406417 }}>
        <Image
          style={{
            width: 54,
            height: 54,
            borderRadius: 4,
            borderWidth: 4,
            borderColor: '#fff',
          }}
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/13510169?s=460&v=4',
          }}
        />

        <Callout>
          <View style={styles.callout}>
            <Text style={styles.devName}>Patrick Santos</Text>
            <Text style={styles.devBio}>
              Front End Developer | React.js, React Native & Vue.js
            </Text>
            <Text style={styles.devTechs}>React.js, React Native</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

Main.navigationOptions = {
  title: 'Findev',
};

const styles = StyleSheet.create({
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
});

export default Main;
