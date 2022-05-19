import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await API.fetchContacts();
    return contacts;
  }
);

export const addUniqeContact = createAsyncThunk(
  'contacts/addContact',
  async values => {
    const contacts = await API.addContact(values);
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contacts = await API.deleteContact(id);
    return contacts;
  }
);
