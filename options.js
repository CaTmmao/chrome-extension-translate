
//该页面是【扩展程序选项】的js代码

//获取from选择框
let fromSelect = document.querySelector('#from')
//获取to选择框
let toSelect = document.querySelector('#to')

//使用chrome storage get API,获取存储进去的 sl(source language) tl(target language)
chrome.storage.sync.get(['sl', 'tl'], function(result) {
    //如果有存储过 source language
    if (result.sl) {
        //把值赋值给页面上的from选项 作用：用户上次关于from选择的是英文，刷新页面后该选项还是默认为英文
        fromSelect.value = result.sl.value
    }

    //如果有存储过 target language
    if (result.tl) {
        //把值赋值给页面上的to选项
        toSelect.value = result.tl.value
    }

    //from选项的值改变的时候
    fromSelect.onchange = function() {
        //获取到当前被选择的选项的 data-type 属性
        let key = this.selectedOptions[0].getAttribute('data-key')
        //chrome storage set API 存储信息，srouce language，传入一个对象
        chrome.storage.sync.set({'sl': {key: key, value: this.value}})
    }

    //to选项的值改变的时候
    toSelect.onchange = function() {
        let key = this.selectedOptions[0].getAttribute('data-key')
        chrome.storage.sync.set({'tl': {key: key, value: this.value}})
    }
})