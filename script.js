var menu = document.getElementById("menu");
var item = document.getElementById("item");

item.style.right = '-300px';

menu.onclick = function(){

if (item.style.right == '-300px') {
    item.style.right = '7px'
}
else{
    item.style.right = '-300px';
}
}