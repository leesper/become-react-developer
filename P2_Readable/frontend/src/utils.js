export const formatDate = (timestamp) => {
  const dt = new Date(timestamp)
  const year = dt.getFullYear()
  const month = "0" + dt.getMonth()
  const day = "0" + dt.getDay()
  const hour = "0" + dt.getHours()
  const min = "0" + dt.getMinutes()
  const sec = "0" + dt.getSeconds()
  return `${year}-${month.substr(-2)}-${day.substr(-2)} ${hour.substr(-2)}:${min.substr(-2)}:${sec.substr(-2)}`
}
