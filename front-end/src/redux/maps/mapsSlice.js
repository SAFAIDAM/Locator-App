import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const mapsSlice = createSlice({
  name: 'map',
  initialState: {
    data: [],
    results: [],
    totalItems: 0,
    dataPerpage: 10,
    currentLocation: {lat: 46.5503307448678, lng: 2.4061195414215795},
    isLoading: false,
    error: null
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setDataPerPage: (state, action) => {
      state.dataPerpage = action.payload;
    }, 
    setLocation: (state, action) => {
      state.currentLocation = action.payload;
    }
  },
});

export const { setData, setLoading, setCurrentPage, setDataPerPage, setResults, setLocation } = mapsSlice.actions;
export default mapsSlice.reducer;

const bearerToken = import.meta.env.VITE_BEARER;
export const fetchData = ( page ) => async dispatch => {
  try {
    dispatch(setLoading(true))
    const response = await axios.get('https://apis.kustplace.com/v3/2700/shops', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },

    }
    )

    await dispatch(setData(response.data.data));
    dispatch(setResults(response.data.data.slice(0, 5)))
    dispatch(setLoading(false))
  } catch (error) {
    // Handle any errors
    return console.error("Error fetching data:", error);
    // Optionally dispatch an error action
    // dispatch(setCarsError(error.message));
  }
};