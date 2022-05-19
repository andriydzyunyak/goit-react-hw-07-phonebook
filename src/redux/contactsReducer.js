import { combineReducers, createReducer, createAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperations from 'redux/contactsOperations';
import {
  fetchContacts,
  addUniqeContact,
  deleteContact,
} from './contactsOperations';

//Actions
export const onChangeFilter = createAction('todos/onChangeFilter');

//Reducers
const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addUniqeContact.fulfilled]: (state, action) => {
    return [...state, action.payload];
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

//Selectors
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const isLoadingContact = state => state.contacts.isLoading;

export default combineReducers({
  items,
  filter,
  isLoading,
});

//Hooks
export const useAddContacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContact = values => {
    const nameNormalized = values.name.toLowerCase();
    const uniqueName = contacts.find(
      contact => contact.name.toLowerCase() === nameNormalized
    );

    if (uniqueName) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(contactsOperations.addUniqeContact(values));
    }
  };
  return { contact: addContact };
};
