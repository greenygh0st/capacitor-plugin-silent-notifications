import { WebPlugin } from '@capacitor/core';

import type { CapacitorSilentNotificationsPlugin } from './definitions';

export class CapacitorSilentNotificationsWeb
  extends WebPlugin
  implements CapacitorSilentNotificationsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
