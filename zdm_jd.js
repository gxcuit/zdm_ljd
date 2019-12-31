//TODO: 注释

function follow() {
    //sleep(1000);
    var follow = id('com.jd.lib.jshop:id/ue').findOne(3000);
    if(!follow){
        toastLog("不存在'关注'或'关注有礼！'");
        back();
        return;
    }
    follow.click();
    sleep(1000);

    //var confirm = text('确认').findOne(1000);
    var confirm = textMatches("/(确认)+|(收下)+|(关注)+/").findOne(2000);
    if (confirm) {
        if (!confirm.click()) {
            confirm.parent().click();
        }
        toastLog("存在''---领取成功！");
    } else {
        toastLog('暂无京豆---领取失败！');
    }
    sleep(1000);
    back();
}




auto.waitFor();
toastLog('start');
//var receive =textContains('点此领取').clickable().find();
var gv_child =textMatches("点此领取\\d+").clickable().find();
//toastLog('当前界面共找到点击领取* '+receive.size()+' 个');
gv_child.forEach(element => {
    //console.log(element);
    console.log("正在领取"+element.text().substring(4,element.text().length));
    
    sleep(1000);
    element.click();
    sleep(1000);
    var jd= id('android:id/text1').text('京东').findOne(1000);
    if (jd) {
        jd.parent().click();
        follow();
    }else{
        back();
        return;
    }
    
    
});

if (gv_child.empty()) {
    console.log('empty');
    
    scrollDown();
}