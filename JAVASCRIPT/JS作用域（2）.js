function myFunction1() {
    var carName = "Volvo";
    /*函数内可调用carName但函数外不行*/
}

var carName = "Volvo";
function myFunction2() {
    /*函数内可调用carName但函数外也行*/
}

function myFunction3() {
    carName = "Volvo";
    document.getElementById("demo2").innerHTML = carName;
    /*函数内可调用carName但函数外也行*/
}