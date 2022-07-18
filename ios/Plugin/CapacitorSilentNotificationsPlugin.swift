import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorSilentNotificationsPlugin)
public class CapacitorSilentNotificationsPlugin: CAPPlugin {
    private let implementation = CapacitorSilentNotifications()

    public override func load() {
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(self.onOpenAppByUserActivity(notification:)),
                                               name: NSNotification.Name("silentNotificationReceived"), object: nil)
    }

    @objc public func onOpenAppByUserActivity(notification: Notification) {
        debugPrint(notification)
        self.notifyListeners("silentNotificationReceived", data: notification.userInfo as? [String : Any] ?? ["something": "happened"], retainUntilConsumed: true)
    }

    // @objc func echo(_ call: CAPPluginCall) {
    //     let value = call.getString("value") ?? ""
    //     call.resolve([
    //         "value": implementation.echo(value)
    //     ])
    // }
}
