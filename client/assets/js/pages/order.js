import OrderContainer from '@containers/orderContainer';
import Loader from '@components/loader';

new Loader();

window.addEventListener('load', () => new OrderContainer());