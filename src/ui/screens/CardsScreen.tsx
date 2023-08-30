import React, { useRef } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import useApi from '../../services/hooks/useApi';
import Card from '../components/Product';
import LikeDislikeButton from '../components/Cart';

const CardsScreen = () => {
  const { data, fetchMoreData } = useApi();
  const swiperRef = useRef();


  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeDislikeButtons: {
    zIndex: 1,
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
  },
  swiperContainer: {},
});
