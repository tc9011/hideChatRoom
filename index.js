/*
* *******************************************************
* Create by tc9011 on 2018/6/20  20:42 
* *******************************************************
* */
let isNeedHide = true;    // 为以后做切换预留参数

/*
* 增强版window.onload，可以多次加载function
*
* @param { Function } func - 需要运行的函数
* *******************************************************
* */
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

/*
* 检测元素是否存在
*
* @param { HTMLElement } ele - 需要检测的元素
* *******************************************************
* */
function checkElement(ele) {
  if (!ele) {
    console.log(`can't get class, element info: ${ele}`);
    return;
  }
}

/*
* 改变有指定className的元素样式
*
* @param { String } className - 元素className
*
* @param { Object } style - 元素样式对象（包含样式名称、隐藏
*                           和显示时的样式）
* *******************************************************
* */
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