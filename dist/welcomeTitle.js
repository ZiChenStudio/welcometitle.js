/*!
 * welcomeTitle.js JavaScript Library v1.0
 * github.com/ZiChenStudio/welcomeTitle.js
 *
 * Copyright (c) 2023 ZiChenStudio Official
 * Released under the MIT License
 * github.com/ZiChenStudio/welcomeTitle.js/blob/main/LICENSE
 *
 * Date(UTC): 2023-08-15
 *
 */

// 'use strict'
const pageTitle = document.title;
const textOnLeave = "(o'v')ノ Hi - ";
const textOnReturn = "(*´∇｀*) 欢迎回来！";
const textOnLeaveAMoment = " Σ(￣д￣;)别走！"
function checkVisibility() {
    if (document.visibilityState === 'visible') {
        document.title = textOnReturn;
        setTimeout(function () {
            if (document.visibilityState === 'visible') {
                document.title = pageTitle;
            }
        }, 2000);
    } else {
        document.title = textOnLeaveAMoment;
        setTimeout(function () {
            document.title = pageTitle;
            setTimeout(function () {
                if (document.visibilityState !== 'visible') {
                    document.title = textOnLeave + pageTitle;
                }
            }, 4000);
        }, 1000);
    }
}
document.addEventListener('visibilitychange', checkVisibility);

