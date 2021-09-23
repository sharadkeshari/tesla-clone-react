import { configureStore } from '@reduxjs/toolkit';
import carreducer from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    car: carreducer
  },
});
