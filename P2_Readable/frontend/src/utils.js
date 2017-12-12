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

export function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
