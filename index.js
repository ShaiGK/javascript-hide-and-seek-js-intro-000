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
      parseInt(children[x].innerHTML) += n
    }
  }
}
