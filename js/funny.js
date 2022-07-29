var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://pic2.zhimg.com/v2-9359c735aa38fa08bc161d8d6c0df38e_r.jpg?source=3af55fa1");
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});