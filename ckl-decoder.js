Object.keys(localStorage).filter(function (key) {
  return key.substring(0, 4) === 'ckl-'
}).reduce(function (results, key) {
  return results.concat(JSON.parse(localStorage[key]))
}, []).map(function (json) {
  return JSON.parse(json)
}).reduce(function (results, log) {
  return results.concat(log.key)
}, [])
