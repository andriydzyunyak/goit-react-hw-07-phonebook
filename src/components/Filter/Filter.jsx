import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filterContacts } from 'redux/contactsSlice';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from 'components/Filter/Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
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
