/**
 * Created by Administrator on 2015/8/5.
 */

require.config({
    paths: {
        jquery: '../../org/jquery-2.1.3.min',
        jqueryui: "../../org/jquery-ui.min",
        window: "../../module/modal/window",
        eventUtil: '../../common/common-event'
    }
});

require(['jquery', 'jqueryui', 'waterFallFunction', 'window', 'eventUtil'], function($, jqu, wf, wd, eve){

    var wfn = new wf.wf();
    //console.log()
    var evet = eve.eventUtil;


    $(function(){


        $(".main-r-container").load("accountsTem.html");
        $(".sideBar").load("sideBarTem.html");


        $(".fixedSideBar>i").click(function(){
            $(".fixedSideBar").addClass("closed");
        })


        $(".carContainer").on("click", "li", function(){
            /*动画结束之后开始设定身份*/
            var $this = $(this);
            $(".bgdmask").show();
            $(".popup").addClass("show");

            var dsrc = $(this).find("img").attr("src");
            $(".popup").attr("data-item", dsrc);
            var dsrc_s = dsrc.substring(20, dsrc.indexOf(".jpg"));

            var pl = window.localStorage.peopleList;
            var valjson = JSON.parse(pl);
            var valstr = valjson[dsrc_s];
            var index1 = valjson[dsrc_s].indexOf('+');
            if(index1 != -1){
                valstr = valstr.replace("+", "@");
                var index2 = valstr.indexOf('+');
                if(index2 != -1){
                    var nick = valjson[dsrc_s].substring(index1+1,  index2);
                    var desc = valjson[dsrc_s].substring(index2+1, valjson[dsrc_s].length);
                } else {
                    var nick = valjson[dsrc_s].substring(index1+1, valjson[dsrc_s].length);
                    var desc = "";
                }


            } else{
                var nick = "";
                var desc = "";
            }


            $("input[name=nickname]").val(nick);
            $("textarea").val(desc);
            /*阻止默认行为*/
            evet.preventDefault(event);
        })

        $(".save").on("click", function(){
            var dsrc = $(".popup").attr("data-item");
            var dsrc_s = dsrc.substring(20, dsrc.indexOf(".jpg"));

            var pl = window.localStorage.peopleList;
            var nick = $("input[name=nickname]").val();
            var desc = $("textarea").val();
            if(!nick){
                alert("请设置昵称哦!");
                evet.preventDefault(event);
            } else {
                var valjson = JSON.parse(pl);
                var lastIndex = valjson[dsrc_s].indexOf("+") > 0 ? valjson[dsrc_s].indexOf("+") : valjson[dsrc_s].length;
                valjson[dsrc_s] = valjson[dsrc_s].substring(0, lastIndex) + "+" + nick + "+" + desc;
                window.localStorage.setItem("peopleList", JSON.stringify(valjson));
                $(".bgdmask").hide();
                $(".popup").removeClass("show");
            }

        })
        $(".bgdmask").click(function(){
            $(".bgdmask").hide();
            $(".popup").removeClass("show");
        })


        /*返回顶部*/
        $(".goTop i").click(function(){
            //$(window).scrollTop(0);
            $('html,body').animate({"scrollTop": "0"}, 1000)
        })

    })

    $(window).resize(function(){
        wfn.waterFall();
    })

    /*这里需要降频去抖吗？*/
    $(window).scroll(function(){

        var scrTop = $(window).scrollTop();
        if(scrTop > 500){
            $(".goTop").css({"visibility": "visible"})
        } else {
            $(".goTop").css({"visibility": "hidden"})
        }
        var flag = wfn.checkScrollSlide();
        //alert("flag: ", flag);

        if(flag){
            $(".loading").css({"visibility": "visible"});
            setTimeout(function(){
                wfn.getMoreImg();
                wfn.waterFall();
                $(".loading").css({"visibility": "hidden"});
            }, 1200)

        }
    })

})