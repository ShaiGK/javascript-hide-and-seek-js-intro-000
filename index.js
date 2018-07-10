function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  for (var i = 0, var list = document.querySelectorAll('.ranked-list'); i < document.querySelectorAll('.ranked-list').length; i++) {
    parseInt(list[i])
    list [i] += 3
  }
}
