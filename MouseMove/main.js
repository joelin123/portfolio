let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[0];

function mouseIn(){
    thisH1.innerHTML="鱷魚出沒了";
}
function mouseOut(){
    thisH1.innerHTML="危機解除";
    thisP.innerHTML="";
}
function mouseMove(e){
    thisP.innerHTML="尋找獵食目標。位置:" + e.clientX + "," + e.clientY;
}

thisDiv.addEventListener("mouseover",mouseIn);
thisDiv.addEventListener("mouseout",mouseOut);
thisDiv.addEventListener("mousemove",mouseMove);