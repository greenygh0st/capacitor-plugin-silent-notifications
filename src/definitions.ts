export interface CapacitorSilentNotificationsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
