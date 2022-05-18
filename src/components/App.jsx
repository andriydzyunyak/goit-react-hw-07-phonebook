// import { useSelector, useDispatch } from 'react-redux';
// import { getContacts } from 'redux/contactsSlice';
// import { useEffect } from 'react';
// import * as contactsOperations from 'redux/contactsOperations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import {
  SectionContainer,
  FormTitle,
  ContactTitle,
} from 'components/Section.styled';

export const App = () => {
  // const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);

  return (
    <SectionContainer>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <ContactList />
      {/* {contacts.length !== 0 ? (
        <ContactList />
      ) : (
        <div>There is no contact.</div>
      )} */}
    </SectionContainer>
  );
};
