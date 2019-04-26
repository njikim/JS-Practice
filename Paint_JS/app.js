const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    //console.log(x,y)
}
//clientX,Y: 윈도우 전체의 범위 내에서 마우스 위치값
//offsetX,Y: 캔버스 내에서 마우스 위치값

function stopPainting(){
    painting = false;
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting()
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}

