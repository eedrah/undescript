Object.keys(localStorage).filter(function (key) {
  return key.substring(0, 4) === 'ckl-'
}).forEach(function (key) {
  delete localStorage[key]
})
