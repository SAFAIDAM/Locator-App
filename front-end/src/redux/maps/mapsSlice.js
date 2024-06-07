import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const mapsSlice = createSlice({
  name: 'map',
  initialState: {
    data: [],
    totalItems: 0,
    dataPerpage: 10,
    currentPage: 1,
    isLoading: false,
    error: null
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
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

  },
});

export const { setData, setLoading, setCurrentPage, setDataPerPage } = mapsSlice.actions;
export default mapsSlice.reducer;

const bearerToken = import.meta.env.VITE_BEARER;



export const fetchData = (page = 1, dataPerPage = 10) => async dispatch => {
  try {
    dispatch(setLoading(true))
    const response = await axios.get('https://apis.kustplace.com/v3/2700/shops', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      },
      params: {
        page, 
        per_page: dataPerPage
      }
    }
    )
    console.log(response.data)
    await dispatch(setData(response.data))
    dispatch(setLoading(false))
    dispatch(setCurrentPage(page))
    dispatch(setDataPerPage(dataPerPage))
  } catch (error) {
    // Handle any errors
    return console.error("Error fetching data:", error);
    // Optionally dispatch an error action
    // dispatch(setCarsError(error.message));
  }
};