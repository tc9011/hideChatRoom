/*
* *******************************************************
* Create by tc9011 on 2018/6/20  20:42 
* *******************************************************
* */
const isNeedHide = true;

function addLoadEvent(func) {
  const oldonload = window.onload;

  if (typeof window.onload !== "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    }
  }
}

function checkElement(ele) {
  if (!ele) {
    console.log(`can't get class, element info: ${ele}`);
    return;
  }
}

function changeStyle(className, styleName) {
  const element = document.getElementsByClassName(className)[0];

  checkElement(element);

  if (styleName === 'display') {
    element.style[styleName] = isNeedHide ? 'none' : 'block';
  } else if (styleName === 'width') {
    element.style[styleName] = isNeedHide ? '100%' : 'calc(100% - 300px)';
  }

  console.log(`${className} ${styleName}: ${element.style[styleName]}`);
}

function main() {
  changeStyle('interaction', 'display');
  changeStyle('video-playing', 'width');
}

addLoadEvent(main);