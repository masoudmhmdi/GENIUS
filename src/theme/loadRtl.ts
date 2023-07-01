import rtlPlugin from 'stylis-plugin-rtl';

import createCache from '@emotion/cache';

// Create rtl cache
export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});
