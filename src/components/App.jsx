import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import {
  SectionContainer,
  FormTitle,
  ContactTitle,
} from 'components/Section.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <SectionContainer>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      {contacts.length !== 0 ? (
        <ContactList />
      ) : (
        <div>There is no contact.</div>
      )}
    </SectionContainer>
  );
};
