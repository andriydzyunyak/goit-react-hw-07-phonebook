import PropTypes from 'prop-types';
import {
  Contact,
  ContactDeleteButton,
  ContactNumber,
} from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <Contact>
      {name}:<ContactNumber>{number}</ContactNumber>
      <ContactDeleteButton type="button" onClick={onDelete}>
        Delete
      </ContactDeleteButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
