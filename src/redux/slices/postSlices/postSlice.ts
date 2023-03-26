import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../helper";

interface MyState {
  posts: any[]; // Replace 'any' with the type of your posts array
  loading: boolean;
  err: null | Error;
}
const initialState: MyState = {
  posts: [],
  loading: false,
  err: null,
};

export const fetchPosts = createAsyncThunk("fetchpost/post", async () => {
  const response = await fetch(baseUrl);
  return await response.json();
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
      state.posts = [];
      state.err = null;
    });
  },
});

export default postSlice.reducer;
