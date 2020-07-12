import 'styles/index.scss';
import 'highlight.js/styles/darcula.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toggle/style.css';

import {library, config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faBorderAll, faList, faSortNumericDown, faSortNumericUp, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import ThemeProvider from 'providers/ThemeProvider';


config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericUp, faSortNumericDown, faSun, faMoon);

export default ({Component, pageProps}) => 
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>