/**
 * @file welcometitle.js JavaScript Library v1.0
 * @see github.com/ZiChenStudio/welcometitle.js
 *
 * @license MIT License
 * @see github.com/ZiChenStudio/welcometitle.js/blob/main/LICENSE
 *
 * @date 2024-02-01（UTC）
 *
 */

const pageTitle = document.title;
const textOnLeave = '(o\'v\')ノ Hi - ';
const textOnReturn = '(*´∇｀*) 欢迎回来！';
const textOnLeaveAMoment = ' Σ(￣д￣;)别走！';

function checkVisibility() {
  if (document.visibilityState === 'visible') {
    document.title = textOnReturn;
    setTimeout(function() {
      if (document.visibilityState === 'visible') {
        document.title = pageTitle;
      }
    }, 2000);
  } else {
    document.title = textOnLeaveAMoment;
    setTimeout(function() {
      document.title = pageTitle;
      setTimeout(function() {
        if (document.visibilityState !== 'visible') {
          document.title = textOnLeave + pageTitle;
        }
      }, 4000);
    }, 1000);
  }
}

document.addEventListener('visibilitychange', checkVisibility);

