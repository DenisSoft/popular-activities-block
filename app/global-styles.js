import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
  }
  div.container,
  div[class^="col-"] {
    padding-left: 10px;
    padding-right: 10px;
   }

}
`;
