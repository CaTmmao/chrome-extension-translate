# chrome-extension-translate
### 项目描述：
这是一个谷歌插件，简单版的划词翻译，使用chrome extensions API 以及 原生JS 完成。
代码中写了详细的注释，方便以后查看，可以通过这个简单的小作品对谷歌插件有个大概的了解。

### 笔记：
我把写这个插件的每一个步骤记在了[博客](http://blog.leanote.com/post/catmmao@gmail.com/%E5%86%99%E4%B8%80%E4%B8%AAchrome%E7%BF%BB%E8%AF%91%E6%8F%92%E4%BB%B6)中

### 谷歌插件文档：
[谷歌插件官方文档](https://developer.chrome.com/extensions)

# 本地运行
### 克隆项目到本地
```
$ git clone git@github.com:CaTmmao/chrome-extension-translate.git
$ npm i
```

# 完成功能
1. 浏览器右上角工具栏处点击插件，在弹出框内可设置【开启】/【关闭】划词翻译功能
2. 多语言翻译
3. 任意页面中选中文本后，显示翻译面板翻译文本
4. 任意页面中选中文本后，右键弹出菜单选项，点击菜单转到新标签页的百度翻译，并翻译之前选中的内容
