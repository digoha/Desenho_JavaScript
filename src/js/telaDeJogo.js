function draw() {
    const canvas = document.getElementById("area");
    const ctx = canvas.getContext("2d");
    //Codigo do desenho

    //Parte de cima////////////////////////////////////////////////////////////////
    ctx.fillStyle = "#813377";
    ctx.beginPath()
    ctx.rect(0, 0, 800, 50)
    ctx.fill();
    //Ovo
    ctx.fillStyle = "#618dcb";
    ctx.beginPath()
    ctx.moveTo(390, 14);
    ctx.lineTo(390, 27);
    ctx.lineTo(395, 27);
    ctx.lineTo(395, 29);
    ctx.lineTo(420, 29);
    ctx.lineTo(420, 27);
    ctx.lineTo(425, 27);
    ctx.lineTo(425, 14);
    ctx.lineTo(420, 14);
    ctx.lineTo(420, 11);
    ctx.lineTo(415, 11);
    ctx.lineTo(415, 9);
    ctx.lineTo(400, 9);
    ctx.lineTo(400, 11);
    ctx.lineTo(395, 11);
    ctx.lineTo(395, 14);
    ctx.lineTo(390, 14);
    ctx.fill();

    ctx.fillStyle = "#813377";
    ctx.beginPath()
    ctx.moveTo(395, 17);
    ctx.lineTo(395, 23);
    ctx.lineTo(399, 23);
    ctx.lineTo(399, 26);
    ctx.lineTo(416, 26);
    ctx.lineTo(416, 23);
    ctx.lineTo(420, 23);
    ctx.lineTo(420, 17);
    ctx.lineTo(416, 17);
    ctx.lineTo(416, 14);
    ctx.lineTo(412, 14);
    ctx.lineTo(412, 12);
    ctx.lineTo(406, 12);
    ctx.lineTo(403, 12);
    ctx.lineTo(403, 14);
    ctx.lineTo(399, 14);
    ctx.lineTo(399, 17);
    ctx.lineTo(395, 17);
    ctx.fill();

    ctx.fillStyle = "#618dcb";
    ctx.beginPath()
    ctx.moveTo(403, 17);
    ctx.lineTo(403, 23);
    ctx.lineTo(412, 23);
    ctx.lineTo(412, 17);
    ctx.fill();

    //Parte do meio////////////////////////////////////////////////////////////////
    //bloco rocho
    ctx.fillStyle = "#5740b4";
    ctx.beginPath()
    ctx.rect(0, 50, 800, 380)
    ctx.fill();
    //bloco azul
    ctx.fillStyle = "#073686";
    ctx.beginPath()
    ctx.rect(100, 60, 600, 360)
    ctx.fill();
    
    //Casa
    ctx.fillStyle = "#5740b4";
    ctx.beginPath()
    ctx.rect(320, 160, 160, 80)
    ctx.fill();
    //Telhado
    ctx.beginPath();
    ctx.moveTo(280, 175);
    ctx.lineTo(300, 175);
    ctx.lineTo(300, 170);
    ctx.lineTo(320, 170);
    ctx.lineTo(320, 165);
    ctx.lineTo(480, 165);
    ctx.lineTo(480, 170);
    ctx.lineTo(500, 170);
    ctx.lineTo(500, 175);
    ctx.lineTo(520, 175);
    ctx.lineTo(520, 165);
    ctx.lineTo(500, 165);
    ctx.lineTo(500, 160);
    ctx.lineTo(480, 160);
    ctx.lineTo(480, 155);
    ctx.lineTo(460, 155);
    ctx.lineTo(460, 150);
    ctx.lineTo(440, 150);
    ctx.lineTo(440, 145);
    ctx.lineTo(420, 145);
    ctx.lineTo(420, 140);
    ctx.lineTo(380, 140);
    ctx.lineTo(380, 145);
    ctx.lineTo(360, 145);
    ctx.lineTo(360, 150);
    ctx.lineTo(340, 150);
    ctx.lineTo(340, 155);
    ctx.lineTo(320, 155);
    ctx.lineTo(320, 160);
    ctx.lineTo(300, 160);
    ctx.lineTo(300, 165);
    ctx.lineTo(280, 165);
    ctx.fill();
    //Janelas
    //Janela esquerda cima
    ctx.fillStyle = "#073686";
    ctx.beginPath()
    ctx.moveTo(360, 205);
    ctx.lineTo(360, 216);
    ctx.lineTo(380, 216);
    ctx.lineTo(380, 205);
    ctx.fill();
    //Janela direita cima
    ctx.fillStyle = "#073686";
    ctx.beginPath()
    ctx.moveTo(420, 205);
    ctx.lineTo(420, 216);
    ctx.lineTo(440, 216);
    ctx.lineTo(440, 205);
    ctx.fill();
    //Janela esquerda baixo
    ctx.fillStyle = "#073686";
    ctx.beginPath()
    ctx.moveTo(360, 205-15);
    ctx.lineTo(360, 216-15);
    ctx.lineTo(380, 216-15);
    ctx.lineTo(380, 205-15);
    ctx.fill();
    //Janela direita baixo
    ctx.fillStyle = "#073686";
    ctx.beginPath()
    ctx.moveTo(420, 205-15);
    ctx.lineTo(420, 216-15);
    ctx.lineTo(440, 216-15);
    ctx.lineTo(440, 205-15);
    ctx.fill();

    //ET
    ctx.fillStyle = "#bab8bb";
    ctx.beginPath()
    ctx.rect(380, 340, 18, 30)
    ctx.rect(398, 360, 26, 10)
    ctx.fill();

    ctx.fillStyle = "#bab8bb";
    ctx.beginPath()
    ctx.moveTo(404, 363);
    ctx.lineTo(404, 354);
    ctx.lineTo(408, 354);
    ctx.lineTo(408, 351);
    ctx.lineTo(414, 351);
    ctx.lineTo(414, 346);
    ctx.lineTo(419, 346);
    ctx.lineTo(419, 349);
    ctx.lineTo(424, 349);
    ctx.lineTo(424, 358);
    ctx.lineTo(420, 358);
    ctx.lineTo(420, 363);
    ctx.fill();

    ctx.fillStyle = "#073686";
    ctx.beginPath()
    ctx.rect(386, 346, 6, 3)
    ctx.fill();
    
    ctx.fillStyle = "#e6a5e4";
    ctx.beginPath()
    ctx.rect(398, 360, 22, 3)
    ctx.fill();
    ctx.fillStyle = "#a1b58a";
    ctx.beginPath()
    ctx.rect(398, 363, 22, 3)
    ctx.fill();

    //Parte de baixo////////////////////////////////////////////////////////////////
    ctx.fillStyle = "#5074b1";
    ctx.beginPath()
    ctx.rect(0, 430, 800, 70)
    ctx.fill();

    //Numero
    ctx.fillStyle = "#033020";
    ctx.beginPath()
    ctx.rect(480, 455, 35, 4)
    ctx.fill();
    ctx.beginPath()
    ctx.rect(480, 455, 5, 8)
    ctx.fill();
    ctx.fillStyle = "#033020";
    ctx.beginPath()
    ctx.rect(510, 455, 5, 25)
    ctx.fill();
    ctx.fillStyle = "#033020";
    ctx.beginPath()
    ctx.rect(505, 467, 5, 12)
    ctx.fill();
    ctx.fillStyle = "#033020";
    ctx.beginPath()
    ctx.rect(480, 476, 35, 4)
    ctx.fill();
    ctx.fillStyle = "#033020";
    ctx.beginPath()
    ctx.rect(480, 473, 5, 5)
    ctx.fill();
    ctx.fillStyle = "#033020";
    ctx.beginPath()
    ctx.rect(485, 466, 30, 3)
    ctx.fill();

    //Linhas pretas////////////////////////////////////////////////////////////////
    //Linha preta superior
    ctx.fillStyle = "black";
    ctx.beginPath()
    ctx.rect(0, 40, 800, 10)
    ctx.fill();

    //Linha preta inferior
    ctx.fillStyle = "black";
    ctx.beginPath()
    ctx.rect(0, 430, 800, 10)
    ctx.fill();

    //Linha preta esquerda
    ctx.fillStyle = "black";
    ctx.beginPath()
    ctx.rect(0, 0, 30, 800)
    ctx.fill();

    //Linha preta direita
    ctx.fillStyle = "black";
    ctx.beginPath()
    ctx.rect(770, 0, 30, 800)
    ctx.fill();
}
window.addEventListener("load", draw);