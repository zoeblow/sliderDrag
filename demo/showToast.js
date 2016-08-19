/*
 * @filename showToast.css
 * @author fy[2016-05-19 13:31]
 * @update fy[2016-06-21 17:26]
 * @version v1.1
 * @description 显示toast
 * @基于zepto/jquery
 */

/*
* V 1.1 更新 可以配置 时间 如果为空则默认为1500毫秒
* 2016年6月21日17:26
* V 1.2 针对IOS系统调整Toast出现位置 
*/

var showToast=(function(){
    var instance=null;
        function show(text,timer){
            if(!timer){
                timer = 1500;
            }
            if(!instance){
                var $container=$('<div class="showToast"><div class="showToastInner"><div class="showToastTips fieldTipBounceIn"><div class="showToastCon">'+text+'</div></div></div></div>');
                $container.appendTo($("body"));
                instance=true;
                setTimeout(function(){
                    $container.remove();
                    instance=false;
                },timer)
            }
        }
   
    return {
        show:show
    }
})();