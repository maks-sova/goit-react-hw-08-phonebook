import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { selectIsLoading, selectError } from '../../redux/selectors';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={`${css.contacts} ${css.container}`}>
      <p className={css.text}>Phonebook</p>
      <ContactForm />
      <p className={css.text}>Contacts</p>
      <Filter />
      {isLoading && <h2>Loading contacts....</h2>}
      {error ? (
        <h2 style={{ color: 'red' }}>An error occured: {error}</h2>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default Contacts;
