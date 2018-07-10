function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (id, name) {
  return document.getElementById('id').querySelector('name')
}
