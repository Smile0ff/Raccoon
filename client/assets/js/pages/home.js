import HomeContainer from '@containers/homeContainer';

import Loader from '@components/loader';
import isMobile from '@utils/isMobile';

if(isMobile())
    new Loader();

window.addEventListener('load', () => new HomeContainer());