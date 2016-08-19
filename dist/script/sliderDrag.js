/*
 * @filename sliderDrag.js
 * @author fy[2016年8月19日15:10:34]
 * @update fy[2016年8月19日15:10:34]
 * @version v1.0
 * @description 滑动验证
 * @基于zepto/jquery
 */

/*
* 2016年8月19日15:10:34
* V 1.0 初次提交 滑动验证组件,感谢 @<傀儡 娃娃> 妹子的辛勤工作。 
*/
//滑动验证
function SliderUnlock(ele,callback){
    var ele = $(ele) || $,
        callback = callback || function(){},
        $matchArea = ele.find("#matchArea"),
        $handler = ele.find("#handler"), //handler
        isMove = false,
        success = false,
        //可放置匹配区域参数
        tWidth = ele.width(), //获取整个滑动轨道宽度
        hWidth = $handler.width(), //获取滑块的宽度，即可放置匹配区域的下限
        mWidth = $matchArea.width(), //获取匹配区域的宽度
        maxWidth = tWidth - mWidth, //可放置匹配区域的上限
        eWide = Math.floor(Math.random()*(maxWidth-hWidth+1)+hWidth); //获取可放置匹配区域的区域
    //放置matchArea
    $matchArea.css("left",eWide);
    /**
    *   移动端
    */
    $handler.on("touchstart", function(e){
        if (success) {
            isMove = false;
            // console.log(11)
        }else{
            isMove = true; 
            // console.log(22)
        };

        var e = event || window.event,
            eStart = e.touches[0].pageX, //起始位置
            eLeft = $handler.position().left;  //position left距离
        $handler.on("touchmove",function(e){
            if(isMove){
                var eOffsetX = event.touches[0].pageX - eStart,
                    disX = eLeft + eOffsetX;
                    //可被匹配的误差范围
                    errorLeft = eWide - 20,
                    errorRight = eWide + 20;
                if(disX <= 0){
                    disX = 0;
                }else if(disX >= maxWidth){
                    disX = maxWidth;
                }
                else if(disX >= errorLeft && disX <= errorRight){ //在可误差范围内
                    disX = eWide;
                    $handler.css("left",disX+"px");
                    isMatch();
                }else{
                    $handler.removeClass("isMatched");
                    $handler.text("|||");
                    success = false;
                }
                $handler.css("left",disX+"px").addClass("isMove");
            }
            
        });

        $handler.on("touchend",function(){
            //isMatch();
        });

        function isMatch(){
            var t = setTimeout(function(){
                var tdisX = $handler.position().left;
                if(tdisX >= errorLeft && tdisX <= errorRight){
                    $handler.addClass("isMatched").css("left",eWide+"px");
                    $(".isMatched").text("ok");
                    success = true;
                    callback();
                }
            },400);
        }
    });
}   
