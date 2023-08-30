import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import VersionCheck from 'react-native-version-check';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Build number: </Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
