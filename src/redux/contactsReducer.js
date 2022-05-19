import { combineReducers, createReducer, createAction } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addUniqeContact,
  deleteContact,
} from './contactsOperations';

export const onChangeFilter = createAction('todos/onChangeFilter');

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addUniqeContact.fulfilled]: (state, action) => {
    const item = action.payload;
    return [...state, item];
  },
  [deleteContact.fulfilled]: (state, action) => {
    state = state.filter(contact => contact.id !== action.payload);
  },
});

const filter = createReducer('', {
  [onChangeFilter]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [addUniqeContact.pending]: () => true,
  [deleteContact.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [addUniqeContact.fulfilled]: () => false,
  [deleteContact.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addUniqeContact.rejected]: () => false,
  [deleteContact.rejected]: () => false,
});

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export default combineReducers({
  items,
  filter,
  isLoading,
});
