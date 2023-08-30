/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { StatusBarHeight } from '../../util/dimensions';
import useApi from '../../services/hooks/useApi';
import Product, { ProductData } from '../components/Product';
import Header from '../components/Header';

const HomeScreen = () => {
  const { data } = useApi();
  console.log('eae', data.length)

  const renderProduct = ({item, index}) => {
    return <Product productData={item} />
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Header renderCart  />
        <FlatList
          data={data}
          renderItem={renderProduct}
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ paddingBottom: 30, }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(236,232,228)',
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 10,
  },
});
