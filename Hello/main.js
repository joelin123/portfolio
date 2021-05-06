/*
window.onload = function(){
    document.onclick = function(e){
alert(e.target.innerHTML + "有" + e.target.innerHTML.length + "個字元");
    }
};
*/
/*
let confirmAnswer = confirm("你真的確定要取消服務嗎?");
console.log(confirmAnswer);
let thisH1 = document.getElementsByTagName("h1")[0]
if (confirmAnswer){
    thisH1.innerHTML = "服務已取消";
    }else{
        thisH1.innerHTML = "繼續使用本服務";
    }
*/
/*
let promtAnswer = prompt("小明家裡有三個小孩，他有兩個哥哥叫張一、張二，請問第三個小孩叫甚麼?");
let thisH1 = document.getElementById("Response");

switch(promtAnswer){
    case "張三":
    thisH1.innerHTML="那小明是誰?"
    break;
    case "小明":
        thisH1.innerHTML="聰明"
    break;
    default:
        thisH1.innerHTML="你有事嗎?"
}
*/

function showAlert(){
thisH1.innerHTML= "Hello!";
}
let thisButton = document.getElementsByTagName("button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
thisButton.onclick = function(){
    showAlert()

};

/*
for(let i=0;i<10;i++){
        if(i==3){
            break;
        }
        console.log(i);
    }
*/
/*
let person = {
    firstName:"Ryan",
    lastName:"Chung",
    height:178
};

for(x in person){
    console.log(x + ":" + person[x]);
}
*/

