import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ImagesState {
  recentlyAdded: IImage[];
  favorited: IImage[];
  selected: IImage | null;
}

const initialState: ImagesState = {
  recentlyAdded: [],
  favorited: [],
  selected: null,
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setRecentlyAdded: (state, action: PayloadAction<IImage[]>) => {
      state.recentlyAdded = [...action.payload].sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    },
    deleteRecentlyAdded: (state, action: PayloadAction<IImage>) => {
      state.recentlyAdded = state.recentlyAdded.filter(
        (image) => image.id !== action.payload.id
      );
    },
    addFavorited: (state, action: PayloadAction<IImage>) => {
      state.favorited.push(action.payload);
    },
    deleteFavorited: (state, action: PayloadAction<IImage>) => {
      state.favorited = state.favorited.filter(
        (image) => image.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setRecentlyAdded,
  deleteRecentlyAdded,
  addFavorited,
  deleteFavorited,
} = imagesSlice.actions;

export default imagesSlice.reducer;