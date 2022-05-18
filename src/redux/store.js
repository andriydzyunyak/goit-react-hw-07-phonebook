import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from 'redux/contactsSlice';
import contactsReducer from 'redux/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });
