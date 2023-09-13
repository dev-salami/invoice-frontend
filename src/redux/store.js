"use client";

import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./features/crudSlice";
export const store = configureStore({
	reducer: {
		crud: crudReducer,
	},
});
