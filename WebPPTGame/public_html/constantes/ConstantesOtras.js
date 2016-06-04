/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
ConstantesOtras = function () {
    var otherConstants = {
        //GET SCORES
        OP_GET_BY_ROUNDS: "option[value='byRounds']",
        OP_GET_BY_VICTORIES: "option[value='byVictories']",
        OP_GET_BY_AVERAGE: "option[value='byAverage']",
        BY_ROUNDS: "byRounds",
        BY_VICTORIES: "byVictories",
        BY_AVERAGE: "byAverage",
        //VARIABLES LOCAL STORAGE
        DATOS: "datos",
        LOGUEADO: "logueado",
        VALUE_RONDAS: "valueRondas",
        ONLINE: "online",
        MODO: "modo",
        //IMAGES
        IMAGE_BLANK: "imagesPPTGame/blank.png",
        IMAGE_HELP_ROJO: "imagesPPTGame/helpsymbolrojo.png",
        IMAGE_HELP_AZUL: "imagesPPTGame/helpsymbolazul.png",
        //SCORES
        LIST_ITEM_OPEN: "<a class='list-group-item'>",
        LIST_ITEM_CLOSE: "</a>",
        //OTHERS
        CPU: "CPU",
        OP_CLAVES: "claves",
        OP_USER: "user",
        SI: "SI",
        //VIEWS
        HTML_LOGIN_SCREEN: "loginScreen.html"
    };
    
    this.getOtherConstants=function(){
        return otherConstants;
    }
};

