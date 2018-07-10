function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  for (var i = 0, list = document.querySelectorAll('.ranked-list'); i < list.length; i++) {
    parseInt(list[i].children[i]).innerHTML += n
  }
}
