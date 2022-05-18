import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from 'redux/contactsSlice';
import { deleteContacts, getContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';
import * as contactsOperations from 'redux/contactsOperations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactBook } from 'components/ContactList/ContactList.styled';
import { Filter } from 'components/Filter/Filter';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  // const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  // const filteredContacts = () => {
  //   const filterNormalized = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterNormalized)
  //   );
  // };

  // const contactsList = filteredContacts();

  return (
    <>
      <Filter />
      <ContactBook>
        {contacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            name={name}
            number={phone}
            onDelete={() => dispatch(deleteContacts(id))}
          />
        ))}
      </ContactBook>
    </>
  );
};
