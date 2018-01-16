$(function () {


   click("#ques1","div");
   click("#ques2","div");
   click("#ques4","div");


});
//单选公共点击
function click(id,children) {
    var images = $(id).find(children);
    //localStorage.radio1="./images/check.png";
    // localStorage.radio2="./images/check.png";
    // localStorage.radio3="./images/check.png"x ;
    images.on("click",function () {
            if($(this).find("img").attr("src")=="./images/check.png"){
                /*  $(this).find("img").attr("src","./images/no-check.png");
                $(this).siblings().find("img").attr("src","./images/check.png");*/
            }else {
                $(this).find("img").attr("src","./images/check.png");
                //localStorage.radio1
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




$.ajax({
    type:"get",  //post
    url:"接口地址",
    data:{
        username:"zhabg",
        password:"123"
    },
    dataType:"json",
    success:function(ret){
        if(ret && ret.status =="000000"){
            //DOM炒作
            var html="";
            for(var i=0;i<ret.list.length;i++){
                html+='<img src="'+ret.list[i].url+'"/>'
            }
            $("#listImg").append(html)
        }else {
            alert(ret.message)
        }
    },
    error:function(ret){

    }
})
function clickEvent() {
    localStorage.user1="不限";
    localStorage.user2="不限";
    localStorage.user3="不限";
    $("#end span").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
        localStorage.user1=$(this).html();
    })
    $("#date span").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
        localStorage.user2=$(this).html();
    })
    $("#price span").on("click",function () {
        $(this).addClass("active").siblings().removeClass("active");
        localStorage.user3=$(this).html();
    })

    $("#btn").on("click",function () {
        skip("./自助游搜索页列表.html");

        $.ajax({
            url:"",
            type:'POST',
            dataType:'json',
            data:{
                user1:localStorage.user1,
                user2:localStorage.user2,
                user3:localStorage.user3,
                user4:$("#insert").val()
            }
        }).done( function (data ) {
            if ( data.success ) {
                skip("./自助游搜索页.html");

            }else {


            }

        } )
    })
}