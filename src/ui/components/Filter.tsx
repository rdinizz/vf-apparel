import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { changeFilter } from '../../services/redux/filterSlice';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

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
    { value: 'ascendant', icon: () => (<FontAwesome name="sort-alpha-asc" size={24} color="black" />) },
    { value: 'descendant', icon: () => (<FontAwesome name="sort-alpha-desc" size={24} color="black" />) },
    { value: 'lowestToHighest', icon: () => (<FontAwesome name="sort-amount-asc" size={24} color="black" />) },
    { value: 'highestToLowest', icon: () => (<FontAwesome name="sort-amount-desc" size={24} color="black" />) },
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
      placeholder='Filter'
      labelStyle={{
        fontSize: 12
      }}
      style={{
        backgroundColor: 'rgb(236,232,228)',
        borderWidth: 0
      }}
    />
  )
}