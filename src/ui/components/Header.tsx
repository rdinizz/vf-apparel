import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cart from './Cart';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Filter, FilterTypes } from './Filter';
import colors from '../../util/constants/colors';
import { Platform } from 'react-native';

const Header = ({
  renderCart,
  renderBackButton,
  renderFilter
}: {
  renderCart?: boolean,
  renderBackButton?: boolean,
  renderFilter?: boolean
}) => {
  const navigation = useNavigation()

  const renderLeftElement = () => {
    if (renderBackButton) {
      return (<Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color={colors.vfPurple} />)
    } else if (renderFilter) {
      return (<Filter filter={FilterTypes.ascendant}/>)
    }
    return (<></>)
  }

  return (
    <View style={styles.headerView}>
      <View style={styles.headerLeftView} >
        {renderLeftElement()}
      </View>
      <View style={styles.headerCenterView}>
        <Text style={styles.headerText}>VF-APPAREL CO</Text>
      </View>
      <View style={styles.headerRightView}>
        {renderCart && <Cart />}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    maxWidth: '85%',
    minWidth: Platform.OS === 'web' ? 430 : 1,
    marginTop: Platform.OS === 'web' ? 20 : 0,
    maxHeight: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    overflow: 'visible',
    zIndex: 2,
  },
  headerLeftView: {
    flex: .30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'visible'
  },
  headerCenterView: {
    flex: .45,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgb(155,132,253)'

  },
  headerRightView: {
    flex: .25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgb(106,107,119)'
  }
});
