import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import {
  SectionContainer,
  FormTitle,
  ContactTitle,
} from 'components/Section.styled';

export const App = () => {
  return (
    <SectionContainer>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <ContactList />
    </SectionContainer>
  );
};
