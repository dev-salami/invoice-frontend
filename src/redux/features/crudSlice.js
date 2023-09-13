"use client";

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	me: 434,
	deleteModalOpen: false,
	createModalOpen: false,
	editModalOpen: false,
	isLoading: true,
};
const crudSlice = createSlice({
	name: "crud",
	initialState,
	reducers: {
		toggleCreateModal: (state, { payload }) => {
			state.createModalOpen = payload;
		},

		toggleDeleteModal: (state, { payload }) => {
			state.deleteModalOpen = payload;
		},

		toggleEditModal: (state, { payload }) => {
			state.editModalOpen = payload;
		},
	},
});
export const { toggleCreateModal, toggleEditModal, toggleDeleteModal } =
	crudSlice.actions;
export default crudSlice.reducer;
