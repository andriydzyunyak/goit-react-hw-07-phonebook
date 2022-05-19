import HashLoader from 'react-spinners/HashLoader';
import { useSelector } from 'react-redux';
import { isLoadingContact } from 'redux/contactsReducer';
import { Spinner } from 'components/Loader/Loader.styled';

export const Loader = () => {
  const isLoading = useSelector(isLoadingContact);
  return (
    <Spinner>
      <HashLoader color="#ff0000" loading={isLoading} size={60} />
    </Spinner>
  );
};
