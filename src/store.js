// Importing the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Importing the cartReducer from CartSlice
import cartReducer from './features/CartSlice'; // ✅ Make sure this path is correct based on your file structure

// Configuring the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign the reducer to the 'cart' slice of state
  },
});

// Exporting the store for use in the application
export default store;
