import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const mapsSlice = createSlice({
  name: 'map',
  initialState: {
    data: [],
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

  },
});


export const { setData, setLoading } = mapsSlice.actions;
export default mapsSlice.reducer;

const bearerToken = import.meta.env.VITE_BEARER;



export const fetchData = () => async dispatch => {
  try {
    dispatch(setLoading(true))
    const response = await axios.get('https://apis.kustplace.com/v3/2700/shops', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json; charset=UTF-8"
      }
    }
    )
    await dispatch(setData(response.data))
    dispatch(setLoading(false))
  } catch (error) {
    // Handle any errors
    return console.error("Error fetching data:", error);
    // Optionally dispatch an error action
    // dispatch(setCarsError(error.message));
  }
};