import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import WineListItem from "../../components/wine/WineListItem"
import data from '../../assets/data.json';
import { RootState } from "../rootReducer";

interface WineListState {
  data: WineListItem[]
}

const initialState: WineListState = {
  data: data,
}

export const wineListSlice = createSlice({
  name: 'wine-list',
  initialState,
  reducers: {
    addWine: (state, action: PayloadAction<WineListItem>) => {
      state.data.push(action.payload)
    },
  },
})

export const {actions: {addWine}} = wineListSlice;

export const getWine = (state: RootState, id: string) => {
  const d = state.wineList.data;

  for(let index in d) {
    const wine = d[index];
    if(wine.id === id) return wine;
  }

  return null;
}

export const getWines = (state: RootState) => {
  return state.wineList.data
}

export default wineListSlice.reducer