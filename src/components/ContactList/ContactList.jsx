import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/contactsReducer';
// import { deleteContacts } from 'redux/contactsSlice';
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

  const filter = useSelector(getFilter);
  const items = useSelector(getContacts);

  const filteredContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const contactsList = filteredContacts();

  const deleteItem = async id => {
    await dispatch(contactsOperations.deleteContact(id));
    dispatch(contactsOperations.fetchContacts());
  };

  return (
    <>
      <Filter />
      <ContactBook>
        {contactsList.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            name={name}
            phone={phone}
            onDelete={() => deleteItem(id)}
          />
        ))}
      </ContactBook>
    </>
  );
};
