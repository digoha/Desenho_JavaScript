function draw() {
    const canvas = document.getElementById("area");
    const ctx = canvas.getContext("2d");
    //Codigo do desenho
    ctx.lineWidth = 1;
    ctx.fillStyle = "green";
    /*ctx.beginPath();
    ctx.moveTo(175, 275);
    ctx.lineTo(175, 175);
    ctx.lineTo(275, 175);
    ctx.lineTo(275, 275);
    ctx.lineTo(175, 275);*/
    ctx.rect(175, 175, 100, 100)
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(175, 175);
    ctx.lineTo(250-25, 125);
    ctx.lineTo(350-25, 125);
    ctx.lineTo(275, 175);
    ctx.lineTo(175, 175);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(275, 175);
    ctx.lineTo(350-25, 125);
    ctx.lineTo(350-25, 225);
    ctx.lineTo(275, 275);
    ctx.lineTo(275, 175);
    ctx.stroke();
    ctx.fill();


}
window.addEventListener("load", draw);