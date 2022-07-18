import { registerPlugin } from '@capacitor/core';

import type { CapacitorSilentNotificationsPlugin } from './definitions';

const CapacitorSilentNotifications = registerPlugin<CapacitorSilentNotificationsPlugin>('CapacitorSilentNotifications');

export * from './definitions';
export { CapacitorSilentNotifications };
