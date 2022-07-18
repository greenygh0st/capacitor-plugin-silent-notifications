import { PluginListenerHandle } from "@capacitor/core";

export interface CapacitorSilentNotificationsPlugin {
  // echo(options: { value: string }): Promise<{ value: string }>;
  /**
   * Listens to events associated with Silent Notifications
   * and notifies the listenerFunc if a Shortcuts has been executed.
   *
   * @since 1.0.0
   *
   * @param eventName Name of the event
   * @param listenerFunc Function to execute when listener gets notified
   */
   addListener(
    eventName: 'silentNotificationReceived',
    listenerFunc: (options: Options) => void,
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Remove all listeners for this plugin.
   *
   * @since 1.0.0
   */
   removeAllListeners(): Promise<void>;

   /**
    * Not currently in use.
    */
   markCompleted(): Promise<any>;
}

export interface Options {
  /**
   * Provide a key-value object that contains information about
   * the shortcut, this will be returned in the getActivatedShortcut
   * method. It is not possible to use the persistentIdentifier key,
   * it is used internally
   */
  userInfo?: any;

  /**
   * Return the object sent with the data
   */
  object?: any;
}
