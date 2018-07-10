function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (id, class) {
  return document.getElementById(id).querySelector(class)
}
