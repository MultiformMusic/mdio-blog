import 'styles/index.scss';
import 'highlight.js/styles/darcula.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {library, config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBorderAll, faList, faSortNumericDown, faSortNumericUp } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericUp, faSortNumericDown);

export default ({Component, pageProps}) => <Component {...pageProps} />