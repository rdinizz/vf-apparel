import React from 'react';
import { View, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
  return <View testID="favoritesContainer" style={styles.container} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
