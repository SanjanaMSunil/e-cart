import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";


const store =configureStore({
    reducer:{
         wishlistreducer:wishlistslice,
         cartReducer:cartSlice
    }
})

export default store