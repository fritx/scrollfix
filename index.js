//not draggable
function doc_ontouchmove(e) {
  e.preventDefault();
}

function ontouchmove(e) {
  var el = e.currentTarget;
  if (el.scrollHeight > el.clientHeight) {
    e.stopPropagation();
  }
}

function ontouchstart(e) {
  var el = e.currentTarget;
  if (el.scrollTop === 0) {
    el.scrollTop = 1;
  } else if (el.scrollHeight === el.scrollTop + el.offsetHeight) {
    el.scrollTop = el.scrollTop - 1;
  }
}

exports.bind = function (el) {
  el.addEventListener('touchmove', ontouchmove);
  el.addEventListener('touchstart', ontouchstart);
}

exports.unbind = function (el) {
  el.removeEventListener('touchmove', ontouchmove);
  el.removeEventListener('touchstart', ontouchstart);
}

exports.setup = function () {
  document.addEventListener('touchmove', doc_ontouchmove);
}

exports.cleanup = function () {
  document.removeEventListener('touchmove', doc_ontouchmove);
}
