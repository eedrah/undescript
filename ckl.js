document.addEventListener('keydown', function (e) {
  var log = JSON.stringify({
    altKey: e.altKey,
    ctrlKey: e.ctrlKey,
    key: e.key,
    keyCode: e.keyCode,
    metaKey: e.metaKey,
    path: e.path,
    repeat: e.repeat,
    returnValue: e.returnValue,
    shiftKey: e.shiftKey,
    srcElement: e.srcElement,
    target: e.target,
    timeStamp: e.timeStamp,
    navigationStart: performance && performance.timing && performance.timing.navigationStart,
    type: e.type
  }, function (key, value) {
    if (value instanceof Node) {
      var node = value
      if (node.nodeType !== 1) {
        return node.nodeName
      }
      var tag = node.nodeName
      var number = Array.prototype.indexOf.call(node.parentNode.childNodes, node)
      var id = node.id
      var className = Array.prototype.join.call(node.classList, '.')
      var text = Array.prototype.filter.call(node.childNodes, function (n) {
        return n.nodeType === 3
      }).map(function (n) {
        return encodeURIComponent(n.textContent)
      }).join('$')
      return tag + '@' + number + '#' + id + '.' + className + '$' + text
    }
    if (value instanceof Window) {
      return '#window'
    }
    return value
  })
  var storageKey = 'ckl-' + Date.now()
  var previous = localStorage[storageKey]
  var store = []
  if (previous) {
    store = JSON.parse(previous)
  }
  store.push(log)
  localStorage[storageKey] = JSON.stringify(store)
})
