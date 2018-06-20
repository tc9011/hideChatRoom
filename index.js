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

function hideChartRoom() {
  const chartRoom = document.getElementsByClassName('interaction')[0];

  checkElement(chartRoom);

  chartRoom.style.display = isNeedHide ? 'none' : 'block';
}

function changeLiveBoxWidth() {
  const liveBox = document.getElementsByClassName('video-playing')[0];

  checkElement(liveBox);

  liveBox.style.width = isNeedHide ? '100%' : 'calc(100% - 300px)';
}

addLoadEvent(hideChartRoom);
addLoadEvent(changeLiveBoxWidth);