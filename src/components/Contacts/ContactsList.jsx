import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from './ContactsItem';
import { List } from '@mui/material';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { deleteContactThunk } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <List sx={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading &&
        filteredContacts?.map(({ name, _id, number }) => (
          <ContactItem
            name={name}
            id={_id}
            key={_id}
            number={number}
            deleteContact={handleDeleteContact}
          />
        ))}
    </List>
  );
};
