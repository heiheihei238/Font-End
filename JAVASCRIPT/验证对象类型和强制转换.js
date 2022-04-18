function verificationArray(){
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = isArray(fruits);
    function isArray(myArray) {
        return myArray.constructor.toString().indexOf("Array") > -1;
    }
}

function verificationDate(){
    var myDate = new Date();
    document.getElementById("demo").innerHTML = isDate(myDate);
    function isDate(myDate) {
        return myDate.constructor.toString().indexOf("Date") > -1;
    }
}
/*一元运算会将可转换的字符转换为数字*/
function myCalc() {
    var y = "5";
    var x = + y;
    document.getElementById("demo").innerHTML =
        typeof y + "<br>" + typeof x;
}

