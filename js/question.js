$(function () {


   click("#ques1","div");
   click("#ques2","div");
   click("#ques4","div");


});
//单选公共点击
function click(id,children) {
    var images = $(id).find(children);
    images.on("click",function () {
            if($(this).find("img").attr("src")=="./images/check.png"){
                /*  $(this).find("img").attr("src","./images/no-check.png");
                $(this).siblings().find("img").attr("src","./images/check.png");*/
            }else {
                $(this).find("img").attr("src","./images/check.png");
                $(this).siblings().find("img").attr("src","./images/no-check.png");
                if($(this).attr("data-result")){
                    if($(this).attr("data-result")=="check"){
                        /*  console.log()*/
                        $(this).parent().next().show();
                      clicks($(this).parent().next().attr("id"))
                    }else {
                        $(this).parent().next().hide();
                    }
                }

            }
    })
}

//多选函数

function clicks(id) {
    var listAll = $( "#"+id+">div").eq(1).children();
    listAll.on("click",function () {
        if($(this).find("img").attr("src")=="./images/check.png"){
            $(this).find("img").attr("src","./images/no-check.png");
            /*  $(this).siblings().find("img").attr("src","./images/check.png");*/
            if($(this).attr("data-su")){
                if($(this).attr("data-su")=="last"){
                    $(this).next().hide();
                }
            }
        }else {
            $(this).find("img").attr("src","./images/check.png");
            /*  $(this).siblings().find("img").attr("src","./images/no-check.png");*/
            if($(this).attr("data-su")){
                if($(this).attr("data-su")=="last"){
                    $(this).next().show();
                }
            }
        }
    })
}
//显示多行文本框
