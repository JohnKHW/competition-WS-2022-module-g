/** @returns {HTMLElement}*/
function $(s) {
  return document.querySelector(s)
}


function vectorAdd(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
    }
}