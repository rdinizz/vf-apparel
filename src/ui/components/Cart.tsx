import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import colors from '../../util/constants/colors';



const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector((state: RootState) => state.cart.cartList)
  const scaleAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    // we set the cart state as dependency every time the cart is changed we call the animation
    Animated.timing(
      scaleAnim,
      {
        toValue: 1.4,
        duration: 150,
        useNativeDriver: true
      }
    ).start(() => {
      Animated.timing(
        scaleAnim,
        {
          toValue:1,
          duration: 150,
          useNativeDriver: true
        }
      ).start();
    });
  }, [cart])
 

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
      <Animated.View style={[styles.buttonStyle, { transform: [{ scale: scaleAnim }] }]}>
        <Animated.Text style={[styles.counterStyle, { transform: [{ scale: scaleAnim }] }]}>{cart.length}</Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Cart;

const styles = StyleSheet.create({
  image: {
    width: 52,
    height: 52,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.vfPurple,
    shadowColor: colors.black03,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
  },
  counterStyle: {
    fontSize: 16,
    color: 'white'
  }
});
