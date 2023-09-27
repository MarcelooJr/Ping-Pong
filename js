//Posição e tamanho da bolinha 
let XBolinha = 300;
let YBolinha = 200;
let diametro = 25;
let raio = 12.5;

//Velocidade da bolinha
let VelocidadeDaBolinhaX = 6;
let velocidadeDABolinhaY = 6;

//Raquete
let xRaquete = 5;
let yRaquete  = 150;
let RaqueteComprimento = 10;
let RaqueteAltura = 90;

function setup (){}
  createCanvas(600, 400);
}

functiondraw(){
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colideBorda();
  mostraRaquete();
  movimentaRaquete();
  colideRaquete();
}
//
function mostraBolinha(){}
   circle(XBolinha, YBolinha, diametro0; 
}
function movimentoBolinha (){
 XBolinha+= VelocidadeDaBolinhaX;
 YBolinha += velocidadeDaBolinhaY;
}
function colideBorda(){
 if (XBolinha > width || XBolinha < 0) {
   VelocidadeDaBolinhaX *= -1;
 }
if (YBolinha > heigth || YBolinha < 0) {
  velocidadeDaBolinhaY *= -1;
}
}
 function mostraRaquete() {
    rect(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
 }
function mostraRaquete(){
  if (keyIsDown(UP_ARROW)) {
     yRaquete -= 10;
  }
if (keyIsDown(DOWN_ARROW)){}
 yRaquete +=10;
  }
}
function colideRaquete() {
 if (
  XBolinha - raio < xRaquete + RaqueteComprimento &&
  YBolinha - raio < yRaquete + RaqueteAltrura &&
YBolinha + raio > yRaquete
