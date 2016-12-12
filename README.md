# sliderDrag
sliderDrag 是一款移动端的滑动验证控件，防止恶意注册、防机器人等等。

### 创建时间 2016-08-19 15:58
#### 作者 [@zoeblow](http://fuyuan.me) [@傀儡 娃娃](http://weibo.com/u/1957474002) 
#### Demo [在线Demo](http://ifuyuan.wang/gitdemo/sliderDrag/index.html)
###版本
> * V 1.0
> * 修改时间 ：2016-08-19 15:58
> * 描述：V 1.0 初次提交 滑动验证组件,感谢 @<傀儡 娃娃> 妹纸的辛勤工作。 
> * 大部分的工作是由妹纸完成的，我只是站在巨人的肩膀上进行封装成插件。
 
> * V 1.1
> * 修改时间 ：2016-12-12 17:10
> * 描述：V 1.1 变更API信息 增加一个reset的方法。
> * 对代码进行重构，增加API暴露的数量、这样更方便扩展。
-----

###调用方式
在html中引入zepto/jquery之后引入sliderDrag.js
完成之后即可直接使用
```html
<div class="u-slider-box">
    <div class="u-slider" id="slider">
        <div class="handler" id="handler">|||</div>
        <div class="matchArea" id="matchArea"></div>
    </div>
</div>
            
<script type="text/javascript" src="script/zepto.min.js"></script>
<script type="text/javascript" src="script/sliderDrag.js"></script>
<script>
    //调用
    SliderUnlock.Slider("#slider",function(){
        showToast.show('验证通过',1000);
        $(".weui_btn_primary").removeClass("weui_btn_disabled");
    });
</script>
```
-----
###参数
SliderUnlock.Slider(id,func)
SliderUnlock.Reset(id,func)

| 参数    | 取值类型   |  默认值  | 描述|
| :----:  | :----:  | :----:  | :----:  |
| id    | String |     必填项   | 要进行滑动验证元素的 ID  |
| func    | function |  可为空  |   完成验证之后做的操作 |

---------