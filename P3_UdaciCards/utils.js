import { Notifications, Permissions } from "expo"
import { AsyncStorage } from "react-native"

const NOTIFICATION_KEY = "UdaciCards:notification"

export const pluralCards = (numOfCards) => (
  numOfCards > 1 ? `${numOfCards} cards` : `${numOfCards} card`
)

export const clearLocalNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)
)

const createLocalNotification = () => ({
  title: "Have some quiz!",
  body: "Come and have some quiz for today!",
  ios: {
    sound: true
  },
  android: {
    sound: true,
    priority: "high",
    sticky: false,
    vibrate: true
  }
})

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if (status === "granted") {
          Notifications.cancelAllScheduledNotificationsAsync()
          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(18)
          tomorrow.setMinutes(0)
          Notifications.scheduleLocalNotificationAsync(
            createLocalNotification(),
            { time: tomorrow, repeat: "day" }
          )

          AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        }
      })
    }
  })
}
