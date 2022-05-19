import { useDispatch, useSelector } from 'react-redux';
// import { getFilter, filterContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/contactsReducer';
import * as contactsReducer from 'redux/contactsReducer';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(contactsReducer.onChangeFilter(evt.currentTarget.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={changeFilter}
        ></FilterInput>
      </FilterLabel>
    </FilterContainer>
  );
};
