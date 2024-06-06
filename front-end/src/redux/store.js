import { configureStore} from "@reduxjs/toolkit";
import mapsReducer from "./maps/mapsSlice";
import { thunk } from "redux-thunk";


const store = configureStore({
  reducer: {
    map: mapsReducer 
  },
});

export const getRootState = () => store.getState();
export const dispatch = store.dispatch;

export default store;