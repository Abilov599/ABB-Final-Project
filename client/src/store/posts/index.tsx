import { createSlice } from "@reduxjs/toolkit";

interface PostsSliceInterface {
  posts: PostItem[];
  loading: boolean;
  error: null | string;
}

const initialState: PostsSliceInterface = {
  posts: [],
  loading: false,
  error: null
};


