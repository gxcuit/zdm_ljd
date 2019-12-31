auto.waitFor();

var gv_child = className('GridView').findOne(2000).children();
gv_child.forEach(view => {
    var getjd=view.findOne(clickable());
    if(getjd)
        console.log(getjd.text());
    
});

