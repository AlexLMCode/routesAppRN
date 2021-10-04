import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BlackButton from '../components/BlackButton';
import {PermissionsContext} from '../context/PermissionsContext';

const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text>Para usar app se necesita el uso del GPS</Text>
      <BlackButton onPress={askLocationPermission} title="Permiso" />
      <Text>{JSON.stringify(permissions, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PermissionsScreen;
