import PropTypes from 'prop-types';
import {
  Contact,
  ContactDeleteButton,
  ContactNumber,
} from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({ name, phone, onDelete }) => {
  return (
    <Contact>
      {name}:<ContactNumber>{phone}</ContactNumber>
      <ContactDeleteButton type="button" onClick={onDelete}>
        Delete
      </ContactDeleteButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
