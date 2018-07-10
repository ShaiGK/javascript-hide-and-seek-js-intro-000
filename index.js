function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  const list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < document.querySelectorAll('.ranked-list').length; i++) {
    parseInt(list[i])
    list[i] += 3
  }
}
