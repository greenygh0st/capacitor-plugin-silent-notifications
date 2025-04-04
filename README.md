# capacitor-plugin-silent-notifications

Allows a Capacitor application to handle iOS remote/silent push notifications.

## Prerequisites
- Must be using iOS 13 or later
- Your app must be setup to receive push notifications (you need the device token)

## Install
[npm link](https://www.npmjs.com/package/capacitor-plugin-silent-notifications)

```bash
npm install capacitor-plugin-silent-notifications
npx cap sync
```

## Add to AppDelete.swift
```swift
func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    // debug
    print("Received by: didReceiveRemoteNotification w/ fetchCompletionHandler")

    // Perform background operation, need to create a plugin
    NotificationCenter.default.post(name: Notification.Name(rawValue: "silentNotificationReceived"), object: nil, userInfo: userInfo)

    // Give the listener a few seconds to complete, system allows for 30 - we give 25. The system will kill this after 30 seconds.
    DispatchQueue.main.asyncAfter(deadline: .now() + 25) {
        // Execute after 25 seconds
        completionHandler(.newData)
    }
}

// we just add this to deal with an iOS simulator bug, this method is deprecated as of iOS 13
func application(_ application: UIApplication, performFetchWithCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    // debug
    print("Received by: performFetchWithCompletionHandler")
    
    // Perform background operation, need to create a plugin
    NotificationCenter.default.post(name: Notification.Name(rawValue: "silentNotificationReceived"), object: nil, userInfo: nil)

    // Give the listener a few seconds to complete, system allows for 30 - we give 25. The system will kill this after 30 seconds.
    DispatchQueue.main.asyncAfter(deadline: .now() + 25) {
        // Execute after 25 seconds
        completionHandler(.newData)
    }
}
```

## Add the listener to your Capacitor app
```typescript
import { CapacitorSilentNotifications } from 'capacitor-plugin-silent-notifications'

CapacitorSilentNotifications.addListener('silentNotificationReceived', async (payload) => {
    // do something with the notification payload here
    console.log('silentNotificationReceived', payload);
});
```

## API

<docgen-index>

* [`addListener('silentNotificationReceived', ...)`](#addlistenersilentnotificationreceived-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('silentNotificationReceived', ...)

```typescript
addListener(eventName: 'silentNotificationReceived', listenerFunc: (payload: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listens to events associated with Silent Notifications
and notifies the listenerFunc if a background notification has been received.

| Param              | Type                                      | Description                                     |
| ------------------ | ----------------------------------------- | ----------------------------------------------- |
| **`eventName`**    | <code>'silentNotificationReceived'</code> | Name of the event                               |
| **`listenerFunc`** | <code>(payload: any) =&gt; void</code>    | Function to execute when listener gets notified |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all listeners for this plugin.

**Since:** 1.0.0

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
