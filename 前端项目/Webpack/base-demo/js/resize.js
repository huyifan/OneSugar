;(function (win, UP) {
    "use strict";

    UP.W = UP.W || {};
    UP.W.Rem = UP.W.Rem || {};

    var timer = null;
    var rem = 12;
    var doc = win.document;
    var docEl = doc.documentElement;
    var visualWidth = 640;

    var vEl = doc.querySelector('meta[name="visual-width"]');
    if (vEl) {
        var vWidth = vEl.getAttribute('content');
        if (vWidth) {
            visualWidth = parseInt(vWidth);
        }
    }

    /**
     * 刷新页面REM值
     */
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        width = width > 768 ? visualWidth : width;
        rem = width / (visualWidth / 100);
        docEl.style.fontSize = rem + 'px';
    }

    /**
     * 页面缩放或重载时刷新REM
     */
    win.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(timer);
            timer = setTimeout(refreshRem, 300);
        }
    }, false);

    // 解决font-size过大导致间距不正常，必须指定body字号为12px
    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = '12px';
    } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
            doc.body.style.fontSize = '12px';
        }, false);
    }

    refreshRem();

    /**
     * rem to px
     * @param d
     * @returns {number}
     */
    UP.W.Rem.rem2px = function (d) {
        var val = parseFloat(d) * rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    };

    /**
     * px to rem
     * @param d
     * @returns {number}
     */
    UP.W.Rem.px2rem = function (d) {
        var val = parseFloat(d) / rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    };

})(window, window.UP || (window.UP = {}));