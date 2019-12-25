auto.waitFor();
setScreenMetrics(device.width,device.height );
for (let index = 0; index < 5; index++) {
    click(550, 850);
    sleep(3000);
    var close = text('关闭').untilFind();
    if (close) {
        close.click();
        sleep(1000);
    }

}
