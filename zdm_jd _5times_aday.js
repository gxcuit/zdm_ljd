/*
 * @Description：什么值得买--移动专享：京东 关注店铺领京豆（https://www.smzdm.com/p/18303912/） auto.js 自动脚本
 * @Author: gxcuit 
 * @Date: 2019-12-31 11:22:45 
 * @Last Modified by: gxcuit
 * @Last Modified time: 2019-12-31 11:49:00
 * 
 * @使用说明：
 * 1.最好首先关闭“什么值得买”和“京东”app
 * 2.进入什么值得买，进入活动界面 https://www.smzdm.com/p/18303912/
 * 3.随机点一个店铺进去，（这一步是确保你的京东可以正常打开，并且已经登陆，这一步也将加速后续打开的速度）
 * 4.运行脚本，观察toast
 * 
 */



function follow() {
    sleep(random(1000, 3000));
    var follow = id('com.jd.lib.jshop:id/ue').findOne(3000);
    if (!follow) {
        toastLog("不存在'关注'或'关注有礼！'");
        sleep(1500);
        back();
        return;
    }
    follow.click();
    sleep(random(2000, 2500));

    //var confirm = text('确认').findOne(1000);
    var confirm = textMatches("/(确认)+|(收下)+|(关注)+/").findOne(3000);
    if (confirm) {
        if (!confirm.click()) {
            confirm.parent().click();
        }
        toastLog("存在''---领取成功！");
    } else {
        toastLog('暂无京豆---领取失败！');
    }
    sleep(random(1000, 2000));
    back();
}
auto.waitFor();
toastLog('start');
var gv_child = className('GridView').findOne(3000).children();
console.log(gv_child.size());

gv_child.forEach(view => {
    sleep(random(900, 1500));
    var getjd = view.findOne(clickable());
    if (!getjd)
        return;
    toastLog("正在领取" + getjd.text());
    //sleep(1000);
    getjd.click();
    sleep(1000);
    //对于由两个
    var jd = id('android:id/text1').text('京东').findOnce(0);
    if (jd) {
        jd.parent().click();
    }
    follow();
    
});
if (gv_child.empty()) {
    console.log('empty');
    scrollDown();
}