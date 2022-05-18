import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

// const filter = createReducer('', {
//   [fetchContacts.fulfilled]: (state, action) => {
//     state.filter = action.payload;
//   },
// });

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

export default combineReducers({
  items,
  isLoading,
});
