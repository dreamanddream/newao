$(function () {
    backTop();
})
/*返回顶部*/
function backTop() {
    var back_top=$("#back-top");
    //首先将#back-to-top隐藏
    back_top.hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                back_top.fadeIn(500);
            } else {
                back_top.fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        back_top.click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                500);
            return false;
        });
    });
}