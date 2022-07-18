# capacitor-plugin-silent-notifications

Allows a Capacitor application to handle iOS remote/silent push notifications.

## Install

```bash
npm install capacitor-plugin-silent-notifications
npx cap sync
```

## Add to AppDelete.swift
```swift
func application(_ application: UIApplication,
                  didReceiveRemoteNotification userInfo: [AnyHashable : Any],
                  fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
    
    // Perform background operation, need to create a plugin
    NotificationCenter.default.post(name: Notification.Name(rawValue: "silentNotificationReceived"), object: nil, userInfo: userInfo)
    
    // Give the listener a few seconds to complete, system allows for 30 - we give 25. The system will kill this after 30 seconds.
    let currentDate = Date()
    let finishDateTime = Calendar.current.date(byAdding: .second, value: 25, to: currentDate)!
    let seconds = abs(Date().timeIntervalSince(finishDateTime))
    
    // do the sleep
    sleep(UInt32(seconds))
    
    // Inform the system after the background operation is completed.
    completionHandler(.newData)
}
```

## API

<docgen-index>

* [`addListener('silentNotificationReceived', ...)`](#addlistenersilentnotificationreceived)
* [`removeAllListeners()`](#removealllisteners)
* [`markCompleted()`](#markcompleted)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('silentNotificationReceived', ...)

```typescript
addListener(eventName: 'silentNotificationReceived', listenerFunc: (options: Options) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Listens to events associated with Silent Notifications
and notifies the listenerFunc if a Shortcuts has been executed.

| Param              | Type                                                              | Description                                     |
| ------------------ | ----------------------------------------------------------------- | ----------------------------------------------- |
| **`eventName`**    | <code>'silentNotificationReceived'</code>                         | Name of the event                               |
| **`listenerFunc`** | <code>(options: <a href="#options">Options</a>) =&gt; void</code> | Function to execute when listener gets notified |

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


### markCompleted()

```typescript
markCompleted() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### Options

| Prop           | Type             | Description                                                                                                                                                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`userInfo`** | <code>any</code> | Provide a key-value object that contains information about the shortcut, this will be returned in the getActivatedShortcut method. It is not possible to use the persistentIdentifier key, it is used internally |
| **`object`**   | <code>any</code> | Return the object sent with the data                                                                                                                                                                             |

</docgen-api>
