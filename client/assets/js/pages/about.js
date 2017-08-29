import AboutContainer from '@containers/aboutContainer';

import Loader from '@components/loader';

new Loader();

window.addEventListener('load', () => new AboutContainer());