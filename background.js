//该文件相当于插件的后台，时刻在运行
//下面的代码做了两个功能： 1.当用户在页面上选择了文字并鼠标右键后，会有该插件的一个菜单选项；
// 2.点击该菜单选项，跳转到一个新标签页，内容是百度翻译刚才选中的文本

chrome.runtime.onInstalled.addListener(function() {
//创建一个chrome的 menu（在页面上右键时出现的菜单）
    chrome.contextMenus.create({
        "id": "translateMenu",
        //title 是当用户右键页面后，在页面上显示的该插件的名字
        "title": "翻译 %s",
        //只有当选中了内容，右键后才会出现插件menu
        "contexts": ["selection"]
    });
});

//监听他的点击事件,当菜单被点击时触发该事件
chrome.contextMenus.onClicked.addListener(function(info) {
    //如果 id === ↑创建的菜单的id
    if (info.menuItemId === 'translateMenu') {
        //创建一个 标签页 url是：百度的翻译API 翻译内容是用户选中的内容
        chrome.tabs.create({url: `https://fanyi.baidu.com/#lang-auto/lang-auto/${info.selectionText}`})
    }
})