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

function changeStyle(className, style) {
  const element = document.getElementsByClassName(className)[0];

  checkElement(element);

  element.style[style.styleName] = isNeedHide ? style.hide : style.show;

  console.log(`${className} ${style.styleName}: ${element.style[style.styleName]}`);
}

function main() {
  const interactionStyle = {
    styleName: 'display',
    hide: 'none',
    show: 'block'
  };

  const videoStyle = {
    styleName: 'width',
    hide: '100%',
    show: 'calc(100% - 300px)'
  };

  changeStyle('interaction', interactionStyle);
  changeStyle('video-playing', videoStyle);
}

addLoadEvent(main);