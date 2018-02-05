# sliderDrag

sliderDrag 是一款移动端的滑动验证控件，防止恶意注册、防机器人等等。

### 创建时间 2016-08-19 15:58

#### 作者 [@zoeblow](http://fuyuan.me) [@傀儡 娃娃](http://weibo.com/u/1957474002)

#### Demo [在线 Demo](http://ifuyuan.wang/gitdemo/sliderDrag/index.html)

---

### 调用方式

在 html 中引入 zepto/jquery 之后引入 sliderDrag.js
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

---

### 参数

SliderUnlock.Slider(id,func)
SliderUnlock.Reset(id,func)

### API
| 参数 | 取值类型 | 默认值 |          描述           |
| :--: | :------: | :----: | :---------------------: |
|  id  |  String  | 必填项 | 要进行滑动验证元素的 ID |
| func | function | 可为空 |  完成验证之后做的操作   |

---


### 更新日志

> * V 1.0
> * 修改时间 ：2016-08-19 15:58
> * 描述：V 1.0 初次提交 滑动验证组件,感谢 @<傀儡 娃娃> 妹纸的辛勤工作。
> * 大部分的工作是由妹纸完成的，我只是站在巨人的肩膀上进行封装成插件。

> * V 1.1
> * 修改时间 ：2016-12-12 17:10
> * 描述：V 1.1 变更 API 信息 增加一个 reset 的方法。
> * 对代码进行重构，增加 API 暴露的数量、这样更方便扩展。

> * V 1.2
> * 修改时间 ：2016-12-13 16:09
> * 描述：V 1.2 更改验证的出发条件。
> * 当 touchend 的时候才进行触发验证，这样的好处有三，1.防止恶意拖动，2.优化页面响应速度，3.优化内存。

> * V 1.3
> * 修改时间 ：2018-2-5 17:18
> * 描述：V 1.3 优化文档
> * 优化文档
