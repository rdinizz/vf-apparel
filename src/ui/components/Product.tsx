import React, { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ImageBackground, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../services/redux/cartSlice';
import { RootState } from '../../services/redux/store';
import useColorAnimation from '../../services/hooks/useColorAnimation';
const { height, width } = Dimensions.get('window');
import tshirt from '../../../assets/tshirt.png'

interface FeaturedImageData {
  id: string;
  src: string;
  width: number;
  height: number;
}

export interface ProductVariantData {
  id: string;
  featured_image: FeaturedImageData;
  price: string;
  position: number
}

export interface ProductData {
  id: string;
  title: string;
  variants: [ProductVariantData];

}

const Product = ({ productData }: { productData: ProductData }) => {
  let smallerPositionVariant: ProductVariantData = productData && productData.variants && productData.variants.length > 0 ? productData.variants.filter(variant => variant.position === 1)[0] : {}
  let imageURL = smallerPositionVariant && smallerPositionVariant.featured_image && smallerPositionVariant.featured_image.src
  // some products don't have image, so we fallback to a default image
  let imageSource = {}
  if (imageURL) {
    imageSource = { uri: imageURL }
  } else {
    imageSource = tshirt
  }
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.cartList)
  const [isAddedToCart, setIsAddedToCart] = useState(cart.filter(cartItem => cartItem.id === productData.id)[0])
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // in case the item is removed from the cart, we check to re enable the button and change colors back
    setIsAddedToCart(cart.filter(cartItem => cartItem.id === productData.id)[0])
  }, [cart])

  const onAddToCart = async () => {
    setIsAddedToCart(true)
    Animated.timing(
      scaleAnim,
      {
        toValue: 0.75,
        duration: 200,
        useNativeDriver: false
      }
    ).start(() => {
      Animated.timing(
        scaleAnim,
        {
          toValue: 1,
          duration: 200,
          useNativeDriver: false
        }
      ).start(() => {
        dispatch(addToCart(productData))
      });
    });

  }
  
  return (
    <View style={styles.productContainer}>
      <Image
        resizeMode="contain"
        style={styles.productImage}
        source={imageSource}
      />
      <Text style={styles.productTitle}>{productData.title}</Text>
      <TouchableOpacity disabled={isAddedToCart} onPress={onAddToCart}>
        <Animated.View style={[styles.addToCartButton, { transform: [{ scale: scaleAnim }], backgroundColor: isAddedToCart ? 'rgb(93,94,108)' : 'rgb(148,121,255)', }]}>
          <Animated.Text style={[styles.addToCartText, { transform: [{ scale: scaleAnim }] }]}>{isAddedToCart ? 'ADDED TO CART' : 'ADD TO CART'}</Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    width: '85%',
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgb(213,203,199)',
  },
  addToCartButton: {

    borderRadius: 6,
    padding: 12,
    paddingVertical: 18,
    alignSelf: 'center',
    marginVertical: 12
  },
  addToCartText: {
    fontWeight: 'bold',
    color: 'white',
  },
  productImage: {
    width: width * 0.75,
    height: height * 0.3,
    borderRadius: 20,
    alignSelf: 'center',
  },
  breedContainer: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: 307,
    height: 48,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#434141',
  },
  originName: {
    marginLeft: 12,
    fontSize: 8,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 10,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#bfbfc0',
  },
});
