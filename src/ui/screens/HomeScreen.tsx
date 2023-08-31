/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { StatusBarHeight } from '../../util/dimensions';
import useApi from '../../services/hooks/useApi';
import Product, { ProductData } from '../components/Product';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';

const HomeScreen = () => {
  const { data, setOrder } = useApi();
  const filterType = useSelector((state: RootState) => state.filter.filterType)
  // since we render elements in homeScreen, we add a useEffect passing the filter state from store as dependency so
  // every time it changes we fetch the api with the ordering parameter
  useEffect(() => {
    setOrder(filterType)
  }, [filterType]);


  const renderProduct = ({item, index}) => {
    return <Product productData={item} />
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        <Header renderCart renderFilter />
        <FlatList
          data={data}
          renderItem={renderProduct}
          style={styles.listStyle}
          contentContainerStyle={styles.listContentContainerStyle}
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
    overflow: 'visible'
  },
  listStyle: { flex: 1, width: '100%' },
  listContentContainerStyle: { paddingBottom: 30, },
  contentView: {
    flex: 1,
    alignItems: 'center',
    marginTop: Constants.statusBarHeight + 10,
    overflow: 'visible',
    zIndex: 1,
  },
});
