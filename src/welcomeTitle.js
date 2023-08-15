'use strict'
const pageTitle = document.title;
const textOnLeave = "(o'v')ノ Hi - ";
const textOnReturn = "(*´∇｀*) 欢迎回来！";
const textOnLeaveAMoment = " Σ(￣д￣;)别走！"
function checkVisibility() {
    if (document.visibilityState === 'visible') {
        document.title = textOnReturn;
        setTimeout(function () {
            document.title = pageTitle;
        }, 2000);
    } else {
        document.title = textOnLeaveAMoment;
        setTimeout(function () {
            document.title = pageTitle;
        }, 1000);
        setTimeout(function () {
            document.title = textOnLeave + pageTitle;
        }, 5000);
    }
}
document.addEventListener('visibilitychange', checkVisibility);

