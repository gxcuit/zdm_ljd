/**
 * 微信自动点赞
 */


function like() {
    var lv = className('ListView').findOnce();
    var lv_child = lv.children();
    lv_child.forEach(element => {
        //log(element);
        var comment = element.findOne(desc('评论'));
        if (comment) {
            comment.click();
            sleep(1000);
            var zan  = text('赞').findOnce();
            if(zan){
                zan.parent().click();
            }
            sleep(1000);
        }
    });
    //v.scrollDown();
    scrollDown();
    sleep(1000);
}

for (let index = 0; index < 10; index++) {
    like();
}



