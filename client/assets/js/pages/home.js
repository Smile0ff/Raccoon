import HomeContainer from '@containers/homeContainer';

import Loader from '@components/loader';

new Loader();

window.addEventListener('load', () => new HomeContainer());