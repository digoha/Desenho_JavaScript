function draw() {
    const canvas = document.getElementById("area");
    const ctx = canvas.getContext("2d");
    //Codigo do desenho
    ctx.fillStyle = "#00931b";
    ctx.beginPath()
    ctx.moveTo(50, 125); //ponto central da figura
    ctx.arc(50, 125, 50, 1.25 * Math.PI, Math.PI *
        0.75);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.beginPath()
    ctx.moveTo(175, 125); //ponto central da figura
    ctx.arc(175, 125, 50, 0.25 * Math.PI, Math.PI *
        1.75);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath()
    ctx.moveTo(300, 125); //ponto central da figura
    ctx.arc(300, 125, 50, 1.75 * Math.PI, Math.PI *
        1.25);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath()
    ctx.moveTo(425, 125); //ponto central da figura
    ctx.arc(425, 125, 50, 0.75 * Math.PI, Math.PI *
        0.25);
    ctx.closePath();
    ctx.fill();
}
window.addEventListener("load", draw);