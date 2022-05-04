/* 添加 */
function create(){
    var oBox=document.getElementById("addItem");
    var creator = document.createElement("div");
    var text = document.createElement("div");
    var del = document.createElement("button");
    creator.className = "card";
    text.className = "text";
    text.innerHTML = "Time: "+ new Date();
    del.innerHTML = "Delete";
    del.className = "button";
    oBox.appendChild(creator);
    creator.appendChild(text);
    creator.appendChild(del);

    /* 删除 */
    del.onclick=function(){
        creator.parentNode.removeChild(creator);
    }
}