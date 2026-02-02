import { createSlice } from "@reduxjs/toolkit";
import { createExhibit } from "../../api/actions/exhibitActions";

interface ExhibitState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ExhibitState = {
  loading: "idle",
  error: null,
};

const exhibitSlice = createSlice({
  name: "exhibit",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createExhibit.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(createExhibit.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(createExhibit.rejected, (state, action) => {
        state.loading = "failed";
        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Exhibit creation failed";
      });
  },
});

export default exhibitSlice.reducer;
