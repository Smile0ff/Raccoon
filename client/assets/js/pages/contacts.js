import ContactsContainer from '@containers/contactsContainer';
import Loader from '@components/loader';

new Loader();

window.addEventListener('load', () => new ContactsContainer());