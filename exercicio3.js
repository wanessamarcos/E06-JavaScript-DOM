function transforma(){
    //Remover as imagens
    var pai = document.getElementById("div1");
    var filho = document.getElementsByTagName("img");
    while(filho.length > 0){
        console.log(filho.length);
        pai.removeChild(filho[0]);
    }
 
   //descrição da imagem 1
   var QuebraLinha = document.createElement("br");
   var criaElem = document.createElement("p");
   var node = document.createTextNode("O cantor britânico, Sam Smith, em sua apresentação no Lollapalooza 2015.");
   criaElem.appendChild(node);
   criaElem.appendChild(QuebraLinha);
   var elem = document.getElementsByTagName("div");
   elem[0].appendChild(criaElem);
 
   //descrição da imagem 2
   QuebraLinha = document.createElement("br");
   criaElem = document.createElement("p");
   node = document.createTextNode("O cantor brasileiro, Jão, em seu novo álbum intitulado como Pirata.");
   criaElem.appendChild(node);
   criaElem.appendChild(QuebraLinha);
   elem = document.getElementsByTagName("div");
   elem[0].appendChild(criaElem);
}

