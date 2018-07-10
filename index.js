function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  const list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list.length; i++) {
    let children = list[i].children;
    parseInt(children[i]) += n
  }
}
