import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductData, ProductVariantData } from './Product';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../services/redux/cartSlice';


const CartItem = ({ productData }: { productData: ProductData }) => {
  // since each variant has a position, we get the element with the smaller position number
  let smallerPositionVariant: ProductVariantData = productData && productData.variants && productData.variants.length > 0 ? productData.variants.filter(variant => variant.position === 1)[0] : {}
  const dispatch = useDispatch()

  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const opacityInterpolation = animatedValue.interpolate({
    inputRange: [0,1],
    outputRange:[1,0]
  })
  const animateOpacity = {
    opacity: opacityInterpolation
  }

  const removeCartITem = () => {
    //animation to slowly fade out
    animatedValue.setValue(0)
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      // after animation is complete, we remove from store
      dispatch(removeFromCart(productData))
     });
  }

  return (
    <Animated.View style={[styles.cartItem, animateOpacity]}>
      <View style={styles.productNameView}>
        <Text style={styles.productNameText}>{productData.title}</Text>
        <Text style={styles.priceText}>${smallerPositionVariant.price}</Text>
      </View>
      <View style={styles.priceView}>
        <TouchableOpacity onPress={removeCartITem}>
          <View style={styles.buttonStyle}>
            <Text style={styles.removeTextStyle}>REMOVE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    alignSelf: 'center',
    width: '90%',
    paddingVertical: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'rgb(221,214,210)',
  },
  productNameView: {
    flex: 1,
    alignItems: 'flex-start',
    marginRight: 6
  },
  productNameText: {
    flexWrap: 'wrap',
    flexShrink: 1,
    fontWeight: '500',
    fontSize: 16,
  },
  priceView: {
    alignItems: 'center',
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 6,
    textAlign: 'right',
    alignSelf: 'flex-start',
  },
  image: {
    width: 52,
    height: 52,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    // backgroundColor: 'rgb(155,132,253)',
    backgroundColor: 'rgb(93,94,108)',
    shadowColor: 'rgba(0,0,0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    padding: 14,
  },
  removeTextStyle: {
    color: 'white',
    fontWeight: '600'
  }
});
