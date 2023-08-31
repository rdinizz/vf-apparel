import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
  Platform,
} from 'react-native';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { RootState } from '../../services/redux/store';
import { useSelector } from 'react-redux';
import Constants from 'expo-constants';
import colors from '../../util/constants/colors';


const CartScreen: () => JSX.Element = () => {
  const cart = useSelector((state: RootState) => state.cart.cartList)
  const scaleAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    // we set the cart state as dependency every time the cart is changed we call the animation
    Animated.timing(
      scaleAnim,
      {
        toValue: 1.4,
        duration: 250,
        useNativeDriver: true
      }
    ).start(() => {
      Animated.timing(
        scaleAnim,
        {
          toValue: 1,
          duration: 250,
          useNativeDriver: true
        }
      ).start();
    });
  }, [cart])
  const totalCartValue = cart.reduce((accumulator, object) => {
    return accumulator + parseFloat(object.variants[0].price);
  }, 0);

  const renderCartItem = ({ item, index }) => {
    return (<CartItem productData={item} />)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header renderBackButton />
      <View style={styles.contentView}>
        <FlatList
          data={cart}
          renderItem={renderCartItem}
        />
        <View style={styles.totalView}>
          <View style={styles.totalTextView}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalTaxes}>Inc. $0 in taxes</Text>
          </View>
          <View style={styles.priceView}>
            <Animated.Text style={[styles.priceText, { transform: [{ scale: scaleAnim }] }]}>${totalCartValue}</Animated.Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.vfGrey,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight + 10 : 0,
  },
  contentView: { flex: 1, justifyContent: 'space-between', },
  totalView: {
    flexDirection: 'row',
    backgroundColor: 'rgb(219,218,221)',
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 15,
    marginBottom: 10
  },
  totalTextView: {
    marginLeft: 10
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  totalTaxes: {
    fontWeight: '400',
    fontSize: 19
  },
  priceView: {
    marginRight: 10
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 24
  }
});
