import ShowreelContainer from '@containers/showreelContainer';

import Loader from '@components/loader';

new Loader();

window.addEventListener('load', () => new ShowreelContainer());