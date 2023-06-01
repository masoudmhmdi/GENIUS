import rtlPlugin from 'stylis-plugin-rtl';

import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
