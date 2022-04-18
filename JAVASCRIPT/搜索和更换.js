/*搜索Runoob第一次出现位置*/
function search1() {
    var str = "Visit Runoob!";
    var n = str.search(/Runoob/i);
    document.getElementById("demo").innerHTML = n;
}

/*直接给入字符串也是可行的，编译时自动转换为正则表达式*/
function search2() {
    var str = "Visit Runoob!";
    var n = str.search("Runoob");
    document.getElementById("demo").innerHTML = n;
}

/*更改搜索到的字符串*/
function replace1() {
    var str = document.getElementById("demo").innerHTML;
    var txt = str.replace(/microsoft/i,"Runoob");
    document.getElementById("demo").innerHTML = txt;
}

/*同上*/
function replace2() {
    var str = document.getElementById("demo").innerHTML;
    var txt = str.replace("Microsoft","Runoob");
    document.getElementById("demo").innerHTML = txt;
}