import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject({
  mode: 'production',
  debug: false
});
