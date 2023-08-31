import { createSlice } from '@reduxjs/toolkit';
import { FilterTypes } from '../../ui/components/Filter';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterType: 'default',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filterType = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const selectFilter = state => state.filterType;

export default filterSlice.reducer;
