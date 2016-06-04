ConstantesJuego=function(){
    var constantsInputs={
        RB_PLAYERS:"rbPlayers",
        RB_JUEGO:"rbJuego",
        RB_RONDAS:"rbRondas",
        RB_JUEGO_ONL:"rbJuegoOnl",
        RB_RONDAS_ONL:"rbRondasOnl",
        NAME_PLAYER1:"nameOfPlayer1",
        NAME_PLAYER2:"nameOfPlayer2",
        NAME_PLAYER_ONLINE:"nameOfPlayerOnline",
        ONE_PLAYER:"onePlayer",
        TWO_PLAYERS:"twoPlayers",
        ONE_ROUND:"oneRound",
        THREE_ROUNDS:"threeRounds",
        FIVE_ROUNDS:"fiveRounds",
        MORE_ROUNDS:"moreRounds",
        ONE_ROUND_ONL:"oneRoundOnl",
        THREE_ROUNDS_ONL:"threeRoundsOnl",
        FIVE_ROUNDS_ONL:"fiveRounds",
        CUSTOMED_ROUNDS:"customedRounds",
        LOGIN_INPUT_TEXT:"login",
        PASS_INPUT_TEXT:"password",
        CONFIRM_PASS_INPUT_TEXT:"confirmPass",
        COMBO_SELECT_SCORES:"selectScores",
        LIST_SCORES:"listPlayers",
        GAME3:"game3",
        GAME5:"game5",
        GAME9:"game9",
        GAME3_ONL:"game3Onl",
        GAME5_ONL:"game5Onl",
        GAME9_ONL:"game9Onl"
    };
    
    this.getConstantsInputs=function(){
        return constantsInputs;
    };
};

//OPTIONS
var PIEDRA3="PIEDRA3";
var PAPEL3="PAPEL3";
var TIJERA3="TIJERA3";
var PIEDRA5="PIEDRA5";
var PAPEL5="PAPEL5";
var TIJERA5="TIJERA5";
var SPOCK5="SPOCK5";
var LAGARTO5="LAGARTO5";
var PIEDRA9="PIEDRA9";
var PAPEL9="PAPEL9";
var TIJERA9="TIJERA9";
var AGUA9="AGUA9";
var AIRE9="AIRE9";
var PISTOLA9="PISTOLA9";
var HUMANO9="HUMANO9";
var ESPONJA9="ESPONJA9";
var FUEGO9="FUEGO9";
//GET SCORES
var OP_GET_BY_ROUNDS="option[value='byRounds']";
var OP_GET_BY_VICTORIES="option[value='byVictories']";
var OP_GET_BY_AVERAGE="option[value='byAverage']";
var BY_ROUNDS="byRounds";
var BY_VICTORIES="byVictories";
var BY_AVERAGE="byAverage";
//ID'S BUTTONS
var SIGN_IN_BTN="signIn";
var SIGN_UP_BTN="signUp";
var LOG_OUT_BTN="logOut";
var NEXT_BTN="next";
//VARIABLES LOCAL STORAGE
var DATOS="datos";
var LOGUEADO="logueado";
var VALUE_RONDAS="valueRondas";
var ONLINE="online";
var MODO="modo";
//IMAGES
var IMAGE_BLANK="imagesPPTGame/blank.png";
var IMAGE_HELP_ROJO="imagesPPTGame/helpsymbolrojo.png";
var IMAGE_HELP_AZUL="imagesPPTGame/helpsymbolazul.png";
//STYLES

//URL SERVLETS
var URL_GET_KEYS="http://localhost:8080/ServerPPTGame/seguridad";
var URL_GET_BY_ROUNDS="http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByRounds";
var URL_GET_BY_VICTORIES="http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByVictories";
var URL_GET_BY_AVERAGE="http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByAverage";
var URL_SERVLET_HASHING_JS="http://192.168.1.104:8080/ServerPPTGame/ServletHashingJS";
var URL_SERVLET_SIGN_UP="http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=put";
var URL_SERVLET_SIGN_IN="http://192.168.1.104:8080/ServerPPTGame/login";
var URL_SERVLET_ADD_VICTORIES="http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=addVictories";
var URL_SERVLET_ADD_ROUNDS="http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=addRounds";
//SCORES
var LIST_ITEM_OPEN="<a class='list-group-item'>";
var LIST_ITEM_CLOSE="</a>";
//OTHERS
var CPU="CPU";
var OP_CLAVES="claves";
var OP_USER="user";
var SI="SI";
//VIEWS
var HTML_LOGIN_SCREEN='loginScreen.html';