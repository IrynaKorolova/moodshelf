import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  activeTags: string[];
}

const initialState: FiltersState = {
  activeTags: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Action to toggle a tag on/off
    toggleTag: (state, action: PayloadAction<string>) => {
      const tag = action.payload;
      const isTagActive = state.activeTags.includes(tag);

      if (isTagActive) {
        // Remove tag if it's already active
        state.activeTags = state.activeTags.filter((t) => t !== tag);
      } else {
        // Add tag if it's not active
        state.activeTags.push(tag);
      }
    },
  },
});

export const { toggleTag } = filtersSlice.actions;
export default filtersSlice.reducer;
