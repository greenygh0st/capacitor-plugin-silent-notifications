import { registerPlugin } from '@capacitor/core';

import type { CapacitorSilentNotificationsPlugin } from './definitions';

const CapacitorSilentNotifications = registerPlugin<CapacitorSilentNotificationsPlugin>(
  'CapacitorSilentNotifications',
  {
    web: () =>
      import('./web').then(m => new m.CapacitorSilentNotificationsWeb()),
  },
);

export * from './definitions';
export { CapacitorSilentNotifications };
