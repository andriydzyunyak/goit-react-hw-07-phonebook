import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUniqeContact = createAsyncThunk(
  'contacts/addContact',
  async (values, { rejectWithValue }) => {
    try {
      const contacts = await API.addContact(values);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await API.deleteContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
