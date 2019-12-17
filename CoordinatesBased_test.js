auto.waitFor();
setScreenMetrics(device.width, device.height);



// for (let index = 0; index < 15; index++) {
//     click(500, 300);
//     sleep(500);
//     back();
//     sleep(500);
//     swipe(100, 1189, 100, 995, 300);
//     //sleep(1000);
// }
//scrollDown();

for (let index = 0; index < 3; index++) {
  var lv = className('ListView').findOnce();
  var lv_child = lv.children();
  lv_child.forEach(element => {
    var name = element.findOne(id('com.tencent.mm:id/boo'));
    if (name) {
      console.log(name.text());
    }
  });
  lv.scrollDown();
  sleep(2000);
}