import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Main = ({ navigation }) => {
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
    <>
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
              uri:
                'https://avatars0.githubusercontent.com/u/13510169?s=460&v=4',
            }}
          />

          <Callout
            onPress={() =>
              navigation.navigate('Profile', {
                github_username: 'santospatrick',
              })
            }
          >
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
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TouchableOpacity style={styles.loadButton} onPress={() => {}}>
          <Icon name="my-location" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
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
  searchForm: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#eee',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    elevation: 2,
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8e4dff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
});

export default Main;
