import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await API.fetchContacts();
    return contacts;
  }
);
