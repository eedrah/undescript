Object.keys(localStorage).filter(function (key) {
  return key.substring(0, 4) === 'ckl-'
}).reduce(function (results, key) {
  return results.concat(JSON.parse(localStorage[key]))
}, []).map(function (json) {
  return JSON.parse(json)
}).reduce(function (results, log) {
  return results.concat(log.key)
}, []).map(l => {
  return {
    'Enter': '\n',
    'Control': '\u2303',
    'Escape': '\u241B',
    'Tab': '\u21E5',
    'Shift': '\u21E7',
    'Alt': '\u2325',
    'Meta': '\u2318',
    'CapsLock': '\u21EA',
    'Backspace': '\u232B',
    'Delete': '\u2326',
    'PageUp': '\u21DE',
    'PageDown': '\u21DF',
    'Home': '\u2196',
    'End': '\u2198',
    'ArrowLeft': '\u2190',
    'ArrowUp': '\u2191',
    'ArrowRight': '\u2192',
    'ArrowDown': '\u2193',
    'Insert': undefined,
    'FKeys': undefined
  }[l] || l
}).join('')
