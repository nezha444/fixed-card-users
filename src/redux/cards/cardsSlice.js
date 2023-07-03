// import { createSlice } from "@reduxjs/toolkit";
// import { getUsersThunk } from "./cardsThunk";

// const usersState = {
//   users: {
//     arrUsers: [],
//     isLoading: false,
//     error: null,
//   },
// };

// const handlePending = (state) => {
//   state.users.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.users.isLoading = false;
//   state.users.error = action.payload;
// };
// const handleFulfilledGet = (state, action) => {
//   state.users.isLoading = false;
//   state.users.arrUsers = action.payload;
//   state.users.error = "";
// };

// // const handleFulfilledPost = (state, action) => {
// //   state.isLoading = false;
// //   state.users.arrUsers.push(action.payload);
// // };
// // const handleFulfilledDelete = (state, action) => {
// //   state.isLoading = false;
// //   state.users.arrUsers = state.users.arrUsers.filter(
// //     (el) => el.id !== action.payload.id
// //   );
// // };

// export const usersSlice = createSlice({
//   name: "users",
//   initialState: usersState,
//   reducers: {
//     setFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       //   .addCase(getusersThunk.pending, handlePending)
//       //   .addCase(getusersThunk.fulfilled, handleFulfilledGet)
//       //   .addCase(getusersThunk.rejected, handleRejected)
//       .addCase(getUsersThunk.pending, handlePending)
//       .addCase(getUsersThunk.fulfilled, handleFulfilledGet)
//       .addCase(getUsersThunk.rejected, handleRejected);

//     //   .addCase(postusersThunk.pending, handlePending)
//     //   .addCase(postusersThunk.fulfilled, handleFulfilledPost)
//     //   .addCase(postusersThunk.rejected, handleRejected)

//     //   .addCase(deleteusersThunk.pending, handlePending)
//     //   .addCase(deleteusersThunk.fulfilled, handleFulfilledDelete)
//     //   .addCase(deleteusersThunk.rejected, handleRejected);
//   },
// });

// export const usersReducer = usersSlice.reducer;

// export const { addusers, removeContact, setFilter } = usersSlice.actions;
