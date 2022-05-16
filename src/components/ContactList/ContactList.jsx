import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, getFilter, getContacts } from 'redux/contactsSlice';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactBook } from 'components/ContactList/ContactList.styled';
import { Filter } from 'components/Filter/Filter';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const contactsList = filteredContacts();

  return (
    <>
      <Filter />
      <ContactBook>
        {contactsList.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContacts(id))}
          />
        ))}
      </ContactBook>
    </>
  );
};
