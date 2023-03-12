import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ImagesState {
  images: IImage[];
  selected: IImage | null;
}

const initialState: ImagesState = {
  images: [],
  selected: null,
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<IImage[]>) => {
      state.images = [...action.payload].sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    },
    updateImage: (state, action: PayloadAction<IImage>) => {
      state.images = state.images.map((image) => {
        if (image.id === action.payload.id) {
          return action.payload;
        } else {
          return image;
        }
      });
    },
    deleteImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter(
        (image) => image.id !== action.payload
      );
    },
    setSelected: (state, action: PayloadAction<IImage | null>) => {
      state.selected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImages, deleteImage, updateImage, setSelected } =
  imagesSlice.actions;

export default imagesSlice.reducer;
