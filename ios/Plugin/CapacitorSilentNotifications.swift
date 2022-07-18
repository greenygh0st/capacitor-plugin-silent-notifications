import Foundation

@objc public class CapacitorSilentNotifications: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
