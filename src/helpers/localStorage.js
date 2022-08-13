export function setData(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getData(name) {
  return JSON.parse(localStorage.getItem(name))
}
