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
* 2016年12月12日15:17:34
* V 1.1 增加 reset方法. 
* 2016年12月13日15:33:14
* V 1.2 将验证是触发条件改为touchend触发，好处1.防止恶意拖动，2.优化页面相应速度，3.优化内存. 
*/

//滑动验证
var SliderUnlock =(function (){
    function _init(ele,callback){
        Slider(ele,callback)
    };
    function Slider(ele,callback){
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
            }else{
                isMove = true; 
            };

            var e = event || window.event,
                eStart = e.touches[0].pageX, //起始位置
                eLeft = $handler.position().left;  //position left距离
            $handler.on("touchmove",function(e){
                if ($(this).hasClass('isMatched')) {
                    return false;
                };
                if(isMove){
                    var eOffsetX = e.touches[0].pageX - eStart,disX = eLeft + eOffsetX;
                    if(disX <= 0){
                        disX = 0;
                    }else if(disX >= maxWidth){
                        disX = maxWidth;
                    }
                    $handler.css("left",disX+"px").addClass("isMove");
                }
                
            });

            $handler.on("touchend",function(e){
                var e = event || window.event
                var eOffsetX = e.changedTouches[0].pageX - eStart,
                        disX = eLeft + eOffsetX,
                        ppLeft = parseInt($matchArea.css('left'));
                    errorLeft = ppLeft - 10,
                    errorRight = ppLeft + 10;
                    if(disX <= 0){
                        disX = 0;
                    }else if(disX >= maxWidth){
                        disX = maxWidth;
                    }
                    else if(disX >= errorLeft && disX <= errorRight){ //在可误差范围内
                        disX = eWide;
                        $handler.css("left",disX+"px");
                        // console.log(disX)
                        isMatch();
                    }
            });

            function isMatch(){
                var tdisX = $handler.position().left;
                // console.log(tdisX)
                if(tdisX >= errorLeft && tdisX <= errorRight){
                    $handler.addClass("isMatched").css("left",eWide+"px");
                    $(".isMatched").text("ok");
                    success = true;
                    callback();
                }
            }
        });
    
    };
    function Reset(ele,callback){
        var ele = $(ele),
        callback = callback || function(){},
        $matchArea = ele.find("#matchArea"),
        $handler = ele.find("#handler"),
        tWidth = ele.width(), //获取整个滑动轨道宽度
        hWidth = $handler.width(), //获取滑块的宽度，即可放置匹配区域的下限
        mWidth = $matchArea.width(), //获取匹配区域的宽度
        maxWidth = tWidth - mWidth, //可放置匹配区域的上限
        eWide = Math.floor(Math.random()*(maxWidth-hWidth+1)+hWidth); //获取可放置匹配区域的区域

        $handler.text('|||').css("left","0px").removeClass("isMatched  isMove");
        $matchArea .css("left",eWide);
        callback();
        _init(ele)
    };
    return {
        Reset:Reset,
        Slider:Slider
    }
})();
