$(function () {
    evaluate();
})
function evaluate() {
    var menu_content=$("#menu-content");
    var good=menu_content.find(".good");
    var bad=menu_content.find(".bad");
    var tan=$("#tan");
    var mask=$(".mask");
    var quxiao=tan.find(".quxiao");
    var queding=tan.find(".queding");
    var ul =$("#menu-content").find("ul");

    /*点击取消*/
    quxiao.on("click",function () {
        mask.hide();
        tan.hide();
    })
    good.on("click",function () {
        if($(this).children().attr("src")=="images/good-grey.png"){
            $(this).children().attr("src","images/good.png");
            $(this).next().children().attr("src","images/bad.png")
        }
    });
    var bad_id;
    bad.on("click",function () {
        bad_id=$(this).attr("data-id");
        /*$("#badID").val(bad_id);*/
        //alert(id)
        if( $('#ul-'+bad_id).children().children(".bad-img").attr("src")!="images/bad.png"){
            return false;
        }
        mask.show();
        tan.show();

    });
    queding.on("click",function () {
        /*var id=$("#badID").val();*/
        /*console.log(id);*/
        if( $('#ul-'+bad_id).children().children(".bad-img").attr("src")=="images/bad.png"){
            $('#ul-'+bad_id).children().children(".bad-img").attr("src","images/good-bad.png");
            if($('#ul-'+bad_id).children(".good").children().attr("src")=="images/good.png"){
                $('#ul-'+bad_id).children(".good").children().attr("src","images/good-grey.png");
            }

        }else{
            $('#ul-'+bad_id).children().children(".bad-img").attr("src","images/bad.png");
        }
        // bad_id=null;
        // $('#ul-'+id).children(".good").children().attr("src","images/bad.png");
        mask.hide();
        tan.hide();
    });
}


