function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  var list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list; i++) {
    return parseInt(list[i]) ++ n
  }
}
