import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

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

  return <MapView style={{ flex: 1 }} initialRegion={region} />;
};

Main.navigationOptions = {
  title: 'Findev',
};

export default Main;
