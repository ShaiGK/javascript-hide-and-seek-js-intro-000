function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  const list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list.length; i++) {
    var children = list[i].children
    for (var x = 0; x < children.length; x++) {
      children[x].innerHTML = parseInt(children[x].innerHTML) + n
    }
  }
}

function deepestChild () {
  const children = document.querySelectorAll('#grand-node').children
  for (var i = 0; i < children.length; i++) {
    childrens = children[i].children
  }
  return childrens
}
