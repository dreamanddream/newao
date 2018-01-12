$(function () {
   goodBad();
    backTop();
})

/*好评和差评*/
    function goodBad() {
        var menu_content=$("#menu-content");
        var good=menu_content.find(".good");
        var bad=menu_content.find(".bad");
        var tan=$("#tan");
        var mask=$(".mask");
        var quxiao=tan.find(".quxiao");
        var flag=1;
        /*好评*/
        if(flag===1){
            good.on("click",function () {
                $(this).attr("src","images/good.png");
                flag=0;
            })
        }
        /*差评*/
        bad.on("click",function () {
            mask.show();
            tan.show();
            if(flag==0){
                $(this).parent().prev().children().attr("src","images/bad.png");
                $(this).attr("src","images/good-bad.png");
                flag=1;
            }

        })
        quxiao.on("click",function () {
            mask.hide();
            tan.hide();
        })
        mask.on("click",function () {
            mask.hide();
            tan.hide();
        })
    }


