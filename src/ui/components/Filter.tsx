import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { changeFilter } from '../../services/redux/filterSlice';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import colors from '../../util/constants/colors';


export enum FilterTypes {
  default = 'default',
  ascendant = 'ascendant',
  descendant = 'descendant',
  lowestToHighest = 'lowestToHighest',
  highestToLowest = 'highestToHighest'
}

export const Filter = ({ filter }: { filter: FilterTypes }) => {
  const dispatch = useDispatch()
  const filterType = useSelector((state: RootState) => state.filter.filterType)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(filterType);
  const [items, setItems] = useState([
    { value: 'ascendant', icon: () => (<FontAwesome name="sort-alpha-asc" size={24} color={colors.vfPurple} />) },
    { value: 'descendant', icon: () => (<FontAwesome name="sort-alpha-desc" size={24} color={colors.vfPurple} />) },
    { value: 'lowestToHighest', icon: () => (<FontAwesome name="sort-amount-asc" size={24} color={colors.vfPurple} />) },
    { value: 'highestToLowest', icon: () => (<FontAwesome name="sort-amount-desc" size={24} color={colors.vfPurple} />) },
  ]);

  const onSetValue = (value) => {
    setValue(value)
    //for some reason value comes as a function and it works for the dropdown, but if we put in to redux its gonna 
    // complain about "A non-serializable value was detected in the state"
    // https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state
    dispatch(changeFilter(value()))
  }

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={onSetValue}
      setItems={setItems}
      ArrowDownIconComponent={() => <AntDesign name="circledowno" size={20} color={colors.vfPurple} />}
      ArrowUpIconComponent={() => <AntDesign name="upcircleo" size={20} color={colors.vfPurple} />}
      TickIconComponent={() => <AntDesign name="check" size={24} color={colors.vfPurple} />}
      labelProps={{adjustsFontSizeToFit: true, numberOfLines: 1}}
      placeholder='Filter'
      labelStyle={{
        fontSize: 12,
      }}
      style={{
        backgroundColor: colors.vfGrey,
        borderWidth: 0
      }}
      placeholderStyle={{
        fontSize: 12,
        color: colors.vfPurple,
        fontWeight: '500',
        flexGrow: 1,
      }}
      dropDownContainerStyle={{
        alignItems: 'center',
        backgroundColor: colors.vfGrey,
        borderWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowRadius: 16,
        shadowOpacity: 1,
        elevation: 5,
        overflow: 'visible',
      }}
    />
  )
}