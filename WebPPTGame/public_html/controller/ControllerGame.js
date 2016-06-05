/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var datos, mapFichas, mapFichasMaquina, opc, modo, online, player, clave, complemento, keyCompl;
//        constantsJSCSS, constantsInputs,constantsDIVS, constantsOpsJuego, otherConstants, constantsURLs;

$(document).ready(function () {
    clave = "";
    complemento = "";
    keyCompl = new ClaveComplemento().getClaveComplemento();
    datos = new DataContainer();
    datos.setRoundsCounter(0);
    datos.setVictoriesP1(0);
    datos.setVictoriesP2(0);
    mapFichas = datos.inicializaMapFichas();
    mapFichasMaquina = datos.inicializaMapFichasMaquina();
    //localStorage.setItem(otherConstants.DATOS, datos);
    $("#" + constantsDIVS.IMAGE_PLAYER2).attr(constantsJSCSS.SRC, otherConstants.IMAGE_BLANK);
//    constantsJSCSS = new ConstantesJSyCSS().getConstantsJSCSS();
//    constantsInputs = new ConstantesInputs().getConstantsInputs();
//    constantsDIVS = new ConstantesDIVS().getConstantsDivs();
//    constantsOpsJuego = new ConstantesOpcionesJuego().getConstantesOpcionesJuego();
//    constantsURLs = new ConstantesServletURLs().getConstantsURLs();
});
/**
 * Método que quita la visibilidad de ciertos elementos del juego, poniendo visible el pasado por parámetro para su visualización en el navegador.
 * @param {type} divId Id del <div> que va a quedar a la vista del usuario.
 */
function cambiaVista(divId) {
    if (divId == constantsDIVS.DIV_LOCAL_MENU_JUEGO) {
        online = false;
    } else {
        online = true;
        if (divId == constantsDIVS.DIV_SCORES) {
            getScores(otherConstants.BY_VICTORIES);
        } else {
            if (divId == constantsDIVS.LOGIN_SCREEN) {
                getKeysFromServlet();
            }
        }
    }
    document.getElementById(constantsDIVS.DIV_MENU_PPAL).style.display = constantsJSCSS.NONE;
    //document.getElementById('playLocal').style.display = NONE;
    document.getElementById(constantsDIVS.DIV_PLAY_ONLINE).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.DIV_RULES).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.DIV_RULES_GRAPHIC).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.DIV_INFO_DEVELOPERS).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.DIV_LOCAL_MENU_JUEGO).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.DIV_ONLINE_MENU).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.DIV_ONLINE_MENU_JUEGO).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.HEADER_GAME).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.GAME3_RED).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.GAME3_BLUE).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.GAME5_RED).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.GAME5_BLUE).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.GAME9_RED).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.GAME9_BLUE).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.VISTA_RESULT).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.DIV_SCORES).style.display = constantsJSCSS.NONE;
    document.getElementById(constantsDIVS.LOGIN_SCREEN).style.display = constantsJSCSS.NONE;
    document.getElementById(divId).style.display = constantsJSCSS.BLOCK;
    $("#" + constantsInputs.NAME_PLAYER1).attr(constantsJSCSS.PLACEHOLDER, language[userLang].player1);
    $("#" + constantsInputs.NAME_PLAYER2).attr(constantsJSCSS.PLACEHOLDER, language[userLang].player2);
    $("#" + constantsInputs.CUSTOMED_ROUNDS).attr(constantsJSCSS.PLACEHOLDER, language[userLang].numberOfRounds);
    $("#" + constantsInputs.NAME_PLAYER_ONLINE).attr(constantsJSCSS.PLACEHOLDER, language[userLang].yourNameHere);
}
/**
 * Método que hace aparecer un elemento, concretamente un <input> de tipo 'text', sobre una pantalla ya cargada y visible.
 * @param {type} element Elemento de entrada de texto que aparecerá en la pantalla.
 */
function visibleElement(element) {
    document.getElementById(element).style.display = constantsJSCSS.INLINE;
}
/**
 * Método que hace desaparecer un elemento, concretamente un <input> de tipo 'text', sobre una pantalla ya cargada y visible.
 * @param {type} element Elemento de entrada de texto que deaparecerá de la pantalla.
 */
function invisibleElement(element) {
    document.getElementById(element).style.display = constantsJSCSS.NONE;
}
/**
 * Método que gestiona el cambio de pantalla del formulario de configuración de la partida en modo local a la pantalla del juego.
 * Se encarga de recoger los datos introducidos por el usuario en dicho formulario y mostrar la pantalla correspondiente
 * en función de la configuración elegida.
 */
function cambiaVistaJuego() {
    if (($("#" + constantsInputs.NAME_PLAYER1).val() == "" || $("#" + constantsInputs.NAME_PLAYER1).val() == constantsJSCSS.UNDEFINED) || (dosJugadores == true && (($("#" + constantsInputs.NAME_PLAYER1).val() == "" || $("#" + constantsInputs.NAME_PLAYER1).val() == constantsJSCSS.UNDEFINED) || ($("#" + constantsInputs.NAME_PLAYER2).val() == "" || $("#" + constantsInputs.NAME_PLAYER2).val() == constantsJSCSS.UNDEFINED)))) {
        alert(language[userLang].fillTheFields);
    } else {
        var dosJugadores = false;
        if (document.getElementById(constantsInputs.ONE_PLAYER).checked) {
            datos.setModalidadJuego(new ModalidadJuego().getModalidad().UNO);
            localStorage.setItem(constantsInputs.RB_PLAYERS, constantsInputs.ONE_PLAYER);
            localStorage.setItem(constantsInputs.NAME_PLAYER1, $("#" + constantsInputs.NAME_PLAYER1).val());
        } else {
            localStorage.setItem(constantsInputs.RB_PLAYERS, TWO_PLAYERS);
            datos.setModalidadJuego(new ModalidadJuego().getModalidad().DOS);
            dosJugadores = true;
            localStorage.setItem(constantsInputs.NAME_PLAYER2, $("#" + constantsInputs.NAME_PLAYER2).val());
        }
        cambiaVista(constantsDIVS.HEADER_GAME);
        datos.setNombreJ1($("#" + constantsInputs.NAME_PLAYER1).val());
        if (document.getElementById(constantsInputs.GAME3).checked == true) {
            localStorage.setItem(constantsInputs.RB_JUEGO, constantsInputs.GAME3);
            document.getElementById(constantsDIVS.GAME3_RED).style.display = constantsJSCSS.BLOCK;
            datos.setFactorAlgoritmo(1);
            modo = 3;
        } else {
            if (document.getElementById(constantsInputs.GAME5).checked == true) {
                localStorage.setItem(constantsInputs.RB_JUEGO, constantsInputs.GAME5);
                document.getElementById(constantsDIVS.GAME5_RED).style.display = constantsJSCSS.BLOCK;
                datos.setFactorAlgoritmo(2);
                modo = 5;
            } else {
                localStorage.setItem(constantsInputs.RB_JUEGO, constantsInputs.GAME9);
                document.getElementById(constantsDIVS.GAME9_RED).style.display = constantsJSCSS.BLOCK;
                datos.setFactorAlgoritmo(4);
                modo = 9;
            }
        }
        setLimiteRondas();
        datos.setTurno(true);
        $("#" + constantsDIVS.IMAGE_PLAYER1).attr(constantsJSCSS.SRC, otherConstants.IMAGE_HELP_ROJO);
        showToastRed();
    }
}
/**
 * Método encargado de cambiar al DataContainer datos el número de rondas elegido en el formulario del modo local.
 */
function setLimiteRondas() {
    if (document.getElementById(constantsInputs.ONE_ROUND).checked) {
        datos.setRoundsLimit(1);
        localStorage.setItem(constantsInputs.RB_RONDAS, constantsInputs.ONE_ROUND);
    } else {
        if (document.getElementById(constantsInputs.THREE_ROUNDS).checked) {
            datos.setRoundsLimit(3);
            localStorage.setItem(constantsInputs.RB_RONDAS, constantsInputs.THREE_ROUNDS);
        } else {
            if (document.getElementById(constantsInputs.FIVE_ROUNDS).checked) {
                datos.setRoundsLimit(5);
                localStorage.setItem(constantsInputs.RB_RONDAS, constantsInputs.FIVE_ROUNDS);
            } else {
                datos.setRoundsLimit($("#" + constantsInputs.CUSTOMED_ROUNDS).val());
                localStorage.setItem(constantsInputs.RB_RONDAS, constantsInputs.MORE_ROUNDS);
                localStorage.setItem(otherConstants.VALUE_RONDAS, $("#" + constantsInputs.CUSTOMED_ROUNDS).val());
            }
        }
    }
}
/**
 * Método encargado de gestionar las opciones elegidas por el usuario durante la partida y de todo el tronco del juego, incluyendo
 * evaluación del ganador.
 * @param {type} window Ventana del juego correspondiente, sea el de 3, 5 o 9 opciones.
 * @param {type} opClicked Elección del usuario de uno de los elementos del juego.
 * @param {type} imgId Id de la imagen pulsada.
 * @returns {gestionaJuego.mmsg|MetaMessage} MetaMessage empleado para la comunicación online con el ServerEndpoint.
 */
function gestionaJuego(window, opClicked, imgId) {
    //alert(datos.getModalidadJuego().name);
    //alert(datos.getModalidadJuego().ordinal);
    var mmsg = null;
    modalidad = new ModalidadJuego().getModalidad();
    if (document.getElementById(window).style.display == constantsJSCSS.BLOCK) {
        opc = mapFichas[opClicked];
        //alert(datos.isTurno()+" - - - "+opc);
        if (datos.isTurno() == true && opc != null) {
            //alert("IS TURNO"+datos.isTurno());
            datos.setEnumChosen1(opc);
            console.debug("opc1", datos.getEnumChosen1());
            datos.setIdImgPulsada1(imgId);
            if (datos.getModalidadJuego().ordinal == modalidad.DOS.ordinal) {
                //DOS JUGADORES
                //alert("DOS JUGADORES");
                datos.setNombreJ2($("#" + constantsInputs.NAME_PLAYER2).val());
                turnoAzul();
                datos.setTurno(false);
                showToastBlue();
            } else {
                if (datos.getModalidadJuego().ordinal == modalidad.UNO.ordinal) {
                    //UN JUGADOR
                    //alert("UN JUGADOR");
                    datos.setEnumChosen2(getEnumFromOrdinal(Math.floor((Math.random() * ((datos.getFactorAlgoritmo() * 2) + 1)))));
                    //console.log(datos.getEnumChosen2());
                    datos.setNombreJ2(otherConstants.CPU);
                    datos.setIdImgPulsada2(gestionaPulsadoMaquina());
                    comunEvaluacionGanador();
                } else {
                    //ONLINE
                    //datos.setNombreJ1($("#nameOfPlayerOnline").val());
                    //alert("ONLINE");
                    mmsg = new MetaMessage();
                    mmsg.type = (new TypeMessage().getTypeMessage().PARTIDA.name);
                    var opcionJuego = new OpcionJuego();
                    opcionJuego.opcion = (datos.getEnumChosen1().ordinal);
                    //alert(datos.getEnumChosen2());
                    if (datos.getEnumChosen2() != null) {
                        //$("#imgResultP2").attr(constantsJSCSS.SRC, document.getElementById(datos.getIdImgPulsada2()).src);
                        $("#" + constantsDIVS.IMG_RESULT_P2).attr(constantsJSCSS.SRC, $("#" + datos.getIdImgPulsada2()).attr(constantsJSCSS.SRC));
                        comunEvaluacionGanador();
                    }
                    mmsg.content = (opcionJuego);
                    var msgToSend = JSON.stringify(mmsg);
                    websocket.send(msgToSend);
                }
            }
        } else {
            if (datos.isTurno() == false && opc != null) {
                datos.setEnumChosen2(opc);
                datos.setIdImgPulsada2(imgId);
                cambiaVistaJuego();
                comunEvaluacionGanador();
                datos.setTurno(true);
            }
        }
    }
    return mmsg;
}
/**
 * Método en el que se evalúa el ganador de la partida.
 */
function comunEvaluacionGanador() {
    //alert("EVALUACION GANADOR");
//    $("#imgResultP1").attr(constantsJSCSS.SRC, document.getElementById(datos.getIdImgPulsada1()).src);
//    $("#imgResultP2").attr(constantsJSCSS.SRC, document.getElementById(datos.getIdImgPulsada2()).src);
    //alert("id 1: " + datos.getIdImgPulsada1() + " --- id 2: " + datos.getIdImgPulsada2());
    //alert("ruta 1: "+$("#"+datos.getIdImgPulsada1()).attr(constantsJSCSS.SRC)+" --- ruta 2: "+$("#"+datos.getIdImgPulsada2()).attr(constantsJSCSS.SRC));
    $("#" + constantsDIVS.IMG_RESULT_P1).attr(constantsJSCSS.SRC, $("#" + datos.getIdImgPulsada1()).attr(constantsJSCSS.SRC));
    if (datos.getModalidadJuego().ordinal == modalidad.DOS.ordinal) {
        $("#" + constantsDIVS.IMG_RESULT_P2).attr(constantsJSCSS.SRC, $("#" + datos.getIdImgPulsada2()).attr(constantsJSCSS.SRC));
    } else {
        $("#" + constantsDIVS.IMG_RESULT_P2).attr(constantsJSCSS.SRC, $("#" + datos.getIdImgPulsada2() + modo).attr(constantsJSCSS.SRC));
    }
    switch (logicaJuego()) {
        case 0:
            //empata
            console.log("case empate");
            $("#" + constantsDIVS.DIV_RESULT_GAME).text(language[userLang].draw);
            break;
        case 1:
            //gana jugador 1
            console.log("case gana");
            $("#" + constantsDIVS.DIV_RESULT_GAME).text(datos.getNombreJ1() + language[userLang].wins);
            datos.sumaVictoriesP1();
            break;
        case 2:
            //gana jugador 2
            console.log("case pierde");
            $("#" + constantsDIVS.DIV_RESULT_GAME).text(datos.getNombreJ2() + language[userLang].wins);
            datos.sumaVictoriesP2();
            break;
    }
    cambiarVistaAResult(datos);
}
/**
 * Método encargado de toda la lógica del juego, válido para las 3 variantes.
 * @returns {Number} resultado Resultado de la partida. Devuelve 0 en caso de empate, 1 si gana el jugador 1 y 2 si gana el jugador 2.
 */
function logicaJuego() {
    var resultado = 0;
    if (datos.getEnumChosen2().ordinal == (datos.getEnumChosen1().ordinal)) {
        resultado = 0;
    } else {
        var ganaChosen = false;
        console.debug("rondas antes", datos.getRoundsCounter());
        datos.avanzaRonda();
        console.debug("rondas después", datos.getRoundsCounter());
        //alert(datos.getRoundsCounter());
        if (datos.rondasFinalizadas() == true) {
            $("#" + constantsInputs.NEXT_BTN).prop(constantsJSCSS.DISABLED, true);
        }
        for (var j = ((datos.getEnumChosen2().ordinal + 1) % ((datos.getFactorAlgoritmo() * 2) + 1)), i = 0; i < (datos.getFactorAlgoritmo()) && !ganaChosen; i++, j = ((j + 1) % ((datos.getFactorAlgoritmo() * 2) + 1))) {
            if (datos.getEnumChosen1().ordinal == j) {
                ganaChosen = true;
                resultado = 2;
            }
        }
        if (!ganaChosen) {
            resultado = 1;
        }
    }
    return resultado;
}
/**
 * 
 * @param {type} ordinal Número aleatorio entre 0 y el límite de elementos del juego, que será el elegido por la máquina en modo 1 jugador.
 * @returns {EnumFichas} Enum de fichas según la opción de juego en la que estés (3, 5 o 9)
 */
function getEnumFromOrdinal(ordinal) {
    var res = null;
    var sal = false;
    var factor = datos.getFactorAlgoritmo();
    switch (factor) {
        case 1:
            for (var i = 0; i < 3 && !sal; i++) {
                if (i == ordinal) {
                    res = new EnumFichas3().getFichas3()[i];
                    sal = true;
                }
            }
            break;
        case 2:
            for (var i = 0; i < 5 && !sal; i++) {
                if (i == ordinal) {
                    res = new EnumFichas5().getFichas5()[i];
                    sal = true;
                }
            }
            break;
        case 4:
            for (var i = 0; i < 9 && !sal; i++) {
                if (i == ordinal) {
                    res = new EnumFichas9().getFichas9()[i];
                    sal = true;
                }
            }
            break;
    }
    return res;
}
/**
 * Método que gestiona el cambio de pantalla desde la elección del usuario/usuarios y/o máquina en la partida hasta la resolución de la misma.
 * En esta pantalla se mostrarán ambas elecciones, la cuenta de victorias de cada jugador y el resultado de la partida.
 */
function cambiarVistaAResult() {
    cambiaVista(constantsDIVS.VISTA_RESULT);
    $("#" + constantsDIVS.WON_COUNT_P1).html(datos.getNombreJ1() + language[userLang].wonCount + datos.getVictoriesP1());
    $("#" + constantsDIVS.WON_COUNT_P2).html(datos.getNombreJ2() + language[userLang].wonCount + datos.getVictoriesP2());
    datos.setEnumChosen1(null);
    datos.setEnumChosen2(null);
    datos.setJugando(false);
    //document.getElementById('back').onclick = function () {

    //};

}
/**
 * Método que escoge la imagen correspondiente a la opción elegida por la máquina en modo 1 jugador.
 * @returns {mapFichasMaquina|mapFMaq|DataContainer.mapFichasMaquina} Id de la imagen que corresponda.
 */
function gestionaPulsadoMaquina() {
    return mapFichasMaquina[datos.getEnumChosen2().name];
}
/**
 * Método para el cambio de color de los elementos a azul en el modo local de dos jugadores. Se encarga de poner los elementos
 * en color azul cuando el turno sea del jugador 2.
 */
function turnoAzul() {
    $("#" + constantsDIVS.IMAGE_PLAYER1).attr(constantsJSCSS.SRC, IMAGE_BLANK);
    $("#" + IMAGE_PLAYER2).attr(constantsJSCSS.SRC, IMAGE_HELP_AZUL);
    if (document.getElementById(constantsInputs.GAME3).checked == true) {
        document.getElementById(constantsDIVS.GAME3_BLUE).style.display = constantsJSCSS.BLOCK;
    } else {
        if (document.getElementById(constantsInputs.GAME5).checked == true) {
            document.getElementById(constantsDIVS.GAME5_BLUE).style.display = constantsJSCSS.BLOCK;
        } else {
            document.getElementById(constantsDIVS.GAME9_BLUE).style.display = constantsJSCSS.BLOCK;
        }
    }
}
/**
 * Gestiona la vuelta al menú inicial desde la pantalla de resultado de la partida.
 */
function backFromPlayScreen() {
    //alert();
    datos.setVictoriesP1(0);
    datos.setVictoriesP2(0);
    $("#" + constantsInputs.NEXT_BTN).prop(constantsJSCSS.DISABLED, false);
    datos.setRoundsCounter(0);
    console.debug("modalidad object: ",datos.getModalidadJuego());
    console.debug("modalidad: ",datos.getModalidadJuego().ordinal);
    console.debug("modalidad online: ",new ModalidadJuego().getModalidad().ONLINE.ordinal);
    if (datos.getModalidadJuego().ordinal == new ModalidadJuego().getModalidad().ONLINE.ordinal && websocket != null) {
        websocket.close();
    }
    cambiaVista(constantsDIVS.DIV_MENU_PPAL);
    //document.getElementById('title').style.display = BLOCK;
}
/**
 * Método encargado de sacar una notificación emergente informando del turno del jugador 1 (color rojo).
 */
function showToastRed() {
    if (userLang != SPANISH) {
        $(constantsJSCSS.CLASE_TOAST).text(datos.getNombreJ1() + language[userLang].turnOf).css(constantsJSCSS.BACKGROUND_COLOR, constantsJSCSS.RED).fadeIn(500).delay(1200).fadeOut(550);
    } else {
        $(constantsJSCSS.CLASE_TOAST).text(language[userLang].turnOf + datos.getNombreJ1()).css(constantsJSCSS.BACKGROUND_COLOR, constantsJSCSS.RED).fadeIn(500).delay(1200).fadeOut(550);
    }
}
/**º
 * Método encargado de sacar una notificación emergente informando del turno del jugador 2 (color azul).
 */
function showToastBlue() {
    if (userLang != SPANISH) {
        $(constantsJSCSS.CLASE_TOAST).text(datos.getNombreJ1() + language[userLang].turnOf).css(constantsJSCSS.BACKGROUND_COLOR, constantsJSCSS.BLUE).fadeIn(500).delay(1200).fadeOut(550);
    } else {
        $(constantsJSCSS.CLASE_TOAST).text(language[userLang].turnOf + datos.getNombreJ1()).css(constantsJSCSS.BACKGROUND_COLOR, constantsJSCSS.BLUE).fadeIn(500).delay(1200).fadeOut(550);
    }
}
/**
 * Método que gestiona el cambio de pantalla del formulario de configuración de la partida en modo online a la pantalla del juego.
 * Se encarga de recoger los datos introducidos por el usuario en dicho formulario y mostrar la pantalla correspondiente
 * en función de la configuración elegida.
 */
function cambiaVistaJuegoOnline(okey) {
    //if (id == "gameOnlineScreen") {
    if (okey) {
        datos.setTurno(true);
        online = true;cambiaVista(constantsDIVS.HEADER_GAME);
        localStorage.setItem(otherConstants.ONLINE, online);
        datos.setModalidadJuego(new ModalidadJuego().getModalidad().ONLINE);
        cambiaVista(constantsDIVS.HEADER_GAME);
        localStorage.setItem(constantsInputs.NAME_PLAYER_ONLINE, $("#" + constantsInputs.LOGIN_INPUT_TEXT).val());
        connect();
        var metamsg = new MetaMessage().getMetaMessage();
        metamsg.type = (new TypeMessage().getTypeMessage().CONEXION.name);
        player = new Player().getPlayer();
        player.namePlayer = (datos.getNombreJ1());
        console.debug("nombre j1", datos.getNombreJ1());
        player.playing = (false);
        //alert("PLAYER JSON "+playerJson);
        datos.setJugando(true);
        if (document.getElementById(constantsInputs.GAME3_ONL).checked == true) {
            localStorage.setItem(constantsInputs.RB_JUEGO_ONL, constantsInputs.GAME3_ONL);
            document.getElementById(constantsDIVS.GAME3_RED).style.display = constantsJSCSS.BLOCK;
            datos.setFactorAlgoritmo(1);
            player.tipoJuego = (new GameType().getGameType().JUEGO3.name);
            modo = 3;
        } else {
            if (document.getElementById(constantsInputs.GAME5_ONL).checked == true) {
                localStorage.setItem(constantsInputs.RB_JUEGO_ONL, constantsInputs.GAME5_ONL);
                document.getElementById(constantsDIVS.GAME5_RED).style.display = constantsJSCSS.BLOCK;
                datos.setFactorAlgoritmo(2);
                player.tipoJuego = (new GameType().getGameType().JUEGO5.name);
                modo = 5;
            } else {
                localStorage.setItem(constantsInputs.RB_JUEGO_ONL, constantsInputs.GAME9_ONL);
                document.getElementById(constantsInputs.GAME9_ONL).style.display = constantsJSCSS.BLOCK;
                datos.setFactorAlgoritmo(4);
                player.tipoJuego = (new GameType().getGameType().JUEGO9.name);
                modo = 9;
            }
        }
        localStorage.setItem(otherConstants.MODO, modo);
        setLimiteRondasOnline();
        metamsg.content = (player);
        console.log(metamsg);
        var msgToSend = JSON.stringify(metamsg);
        //alert(msgToSend);
        waitForSocketConnection(websocket, function () {
            websocket.send(msgToSend);
        });
    } else {
        cambiaVistaJuegoRandom();
    }
}

/**
 * Método encargado de cambiar al DataContainer datos el número de rondas elegido en el formulario del modo online.
 */
function setLimiteRondasOnline() {
    if (document.getElementById(constantsInputs.ONE_ROUND_ONL).checked) {
        datos.setRoundsLimit(1);
        player.numberOfRounds = (new RoundsNumber().getRoundsNumber().UNA.name);
        localStorage.setItem(constantsInputs.RB_RONDAS_ONL, constantsInputs.ONE_ROUND_ONL);
    } else {
        if (document.getElementById(constantsInputs.THREE_ROUNDS_ONL).checked) {
            datos.setRoundsLimit(3);
            player.numberOfRounds = (new RoundsNumber().getRoundsNumber().TRES.name);
            localStorage.setItem(constantsInputs.RB_RONDAS_ONL, constantsInputs.THREE_ROUNDS_ONL);
        } else {
            datos.setRoundsLimit(5);
            player.numberOfRounds = (new RoundsNumber().getRoundsNumber().CINCO.name);
            localStorage.setItem(constantsInputs.RB_RONDAS_ONL, constantsInputs.FIVE_ROUNDS_ONL);
        }
    }
    //alert(player.numberOfRounds.name);
}
/**
 * Método encargado de la configuración de una partida aleatoria, con patrones de juego cualesquiera, sin que el usuario los elija.
 */
function randomGame() {
    connect();
    var metamsg = new MetaMessage();
    metamsg.type = (new TypeMessage().getTypeMessage().CONEXION.name);
    var p = new Player();
    p.namePlayer = datos.getNombreJ1();
    p.numberOfRounds = new RoundsNumber().getRoundsNumber().ANY.name;
    p.tipoJuego = new GameType().getGameType().ANY.name;
    p.numPartidas = 0;
    p.playing = false;
    metamsg.content = p;
    var msgToSend = JSON.stringify(metamsg);
    waitForSocketConnection(websocket, function () {
        websocket.send(msgToSend);
    });

}

function getScores(selectedOption) {
    var players = null;
    if (selectedOption == otherConstants.BY_ROUNDS) {
        $.post(constantsURLs.URL_GET_BY_ROUNDS,
                function (data) {
                    players = JSON.parse(data);
                    console.debug("players: ", players);
                    $("#" + constantsInputs.LIST_SCORES).text("");
                    for (var i = 0; i < players.length; i++) {
                        $("#" + constantsInputs.LIST_SCORES).append(otherConstants.LIST_ITEM_OPEN + language[userLang].nameScores + players[i].namePlayer + language [userLang].victoriesScores + players[i].numVictorias + language[userLang].roundsScores + players[i].numPartidas + otherConstants.LIST_ITEM_CLOSE);
                    }
                });
    } else {
        if (selectedOption == otherConstants.BY_VICTORIES) {
            $.post(constantsURLs.URL_GET_BY_VICTORIES,
                    function (data) {
                        players = JSON.parse(data);
                        console.debug("players: ", players);
                        console.debug("players: ", JSON.parse(JSON.stringify(players)));
                        $("#" + constantsInputs.LIST_SCORES).text("");
                        for (var i = 0; i < players.length; i++) {
                            $("#" + constantsInputs.LIST_SCORES).append(otherConstants.LIST_ITEM_OPEN + language[userLang].nameScores + players[i].namePlayer + language [userLang].victoriesScores + players[i].numVictorias + language[userLang].roundsScores + players[i].numPartidas + otherConstants.LIST_ITEM_CLOSE);
                        }

                    });
        } else {
            $.post(constantsURLs.URL_GET_BY_AVERAGE,
                    function (data) {
                        players = JSON.parse(data);
                        console.debug("players: ", players);
                        $("#" + constantsInputs.LIST_SCORES).text("");
                        for (var i = 0; i < players.length; i++) {
                            $("#" + constantsInputs.LIST_SCORES).append(otherConstants.LIST_ITEM_OPEN + language[userLang].nameScores + players[i].namePlayer + language [userLang].victoriesScores + players[i].numVictorias + language[userLang].roundsScores + players[i].numPartidas + otherConstants.LIST_ITEM_CLOSE);
                        }
                    });
        }
    }
}

function getKeysFromServlet() {
    if (clave == "") {
        $.ajax({
            type: constantsJSCSS.POST,
            url: constantsURLs.URL_GET_KEYS
        }).done(function (data) {
            //alert(data);
            console.debug("DATA", data);
            keyCompl = JSON.parse(data);
            console.debug("keyCompl", keyCompl);
            clave = keyCompl.claves[Math.floor((Math.random() * ((keyCompl.claves.length))))];
            console.debug("claves", clave);
            complemento = keyCompl.complementos[Math.floor((Math.random() * ((keyCompl.complementos.length))))];
            console.debug("complementos", complemento);
        });
    }
}

function doLogin() {
    var logueadoCorrectamente;
    if ($("#" + constantsInputs.LOGIN_INPUT_TEXT).val() != "" && $("#" + constantsInputs.PASS_INPUT_TEXT).val() != "" && (click == false || (click == true && $("#" + constantsInputs.PASS_INPUT_TEXT).val() == $("#" + constantsInputs.CONFIRM_PASS_INPUT_TEXT).val()))) {
        var user = new User().getUser();
        user.login = $("#" + constantsInputs.LOGIN_INPUT_TEXT).val();
        user.pass = $("#" + constantsInputs.PASS_INPUT_TEXT).val();
        datos.setNombreJ1(user.login);
        var key = clave + "" + complemento;
        var keyHash, complHash;
        $.post(constantsURLs.URL_SERVLET_HASHING_JS,
                {op: otherConstants.OP_CLAVES, clave: clave, complemento: complemento},
                function (data) {
                    keyHash = JSON.parse(data)[0];
                    complHash = JSON.parse(data)[1];
                    $.post(constantsURLs.URL_SERVLET_HASHING_JS,
                            {op: otherConstants.OP_USER, user: JSON.stringify(user), fraseHash: key},
                            function (data) {
                                user = JSON.parse(data);
                                if (click == true) {
                                    $.post(constantsURLs.URL_SERVLET_SIGN_UP,
                                            {user: user, claveHasheada: keyHash, complementoHasheado: complHash, claveComplemento: JSON.stringify(keyCompl)},
                                            function (data) {
                                                logueadoCorrectamente = data;
                                                compruebaSiLogueadoBien(logueadoCorrectamente, false);
                                            });
                                } else {
                                    $.post(constantsURLs.URL_SERVLET_SIGN_IN,
                                            {user: user, claveHasheada: keyHash, complementoHasheado: complHash, claveComplemento: JSON.stringify(keyCompl)},
                                            function (data) {
                                                logueadoCorrectamente = data;
                                                compruebaSiLogueadoBien(logueadoCorrectamente, true);
                                            });
                                }
                            });
                });
    } else {
        alert(language[userLang].fillTheFields);
    }
}

function compruebaSiLogueadoBien(logueadoCorrectamente, click) {
    if (logueadoCorrectamente == otherConstants.SI) {
        localStorage.setItem(otherConstants.LOGUEADO, JSON.stringify({nombre: datos.getNombreJ1(), yaLogueado: true}));
        clave = "";
        complemento = "";
        cambiaVista(constantsDIVS.DIV_PLAY_ONLINE);
        removeMaterializeImports();
    } else {
        if (click == true) {
            alert(language[userLang].wrongLoginOrPass);
        } else {
            alert(language[userLang].passNotEqual);
        }
    }
}

function muestraPantallaLoginSiNoLogueado() {
    var logueado = JSON.parse(localStorage.getItem(otherConstants.LOGUEADO));
    console.debug("logueado", logueado);
    if (logueado != null) {
        if (logueado.yaLogueado == true) {
            datos.setNombreJ1(logueado.nombre);
            cambiaVista(constantsDIVS.DIV_PLAY_ONLINE);
            $("#" + constantsDIVS.NAME_LOGGED_PLAYER).text(logueado.nombre);
            $("#" + constantsDIVS.LOGGED_PLAYER).text(logueado.nombre);
        }
    } else {
        console.debug("html", otherConstants.HTML_LOGIN_SCREEN);
        $('#' + constantsDIVS.LOGIN_SCREEN).load(otherConstants.HTML_LOGIN_SCREEN);
        console.debug("DIV LOGIN", constantsDIVS.LOGIN_SCREEN);
        cambiaVista(constantsDIVS.LOGIN_SCREEN);
    }
}

function logOut() {
    localStorage.removeItem(otherConstants.LOGUEADO);
    cambiaVista(constantsDIVS.DIV_MENU_PPAL);
}

function cambiaVistaJuegoRandom() {
    datos.setModalidadJuego(new ModalidadJuego().getModalidad().ONLINE);
    cambiaVista(constantsDIVS.HEADER_GAME);
    if (datos.getFactorAlgoritmo() == 1) {
        document.getElementById(constantsDIVS.GAME3_RED).style.display = constantsJSCSS.BLOCK;
        //player.tipoJuego = (new GameType().getGameType().JUEGO3.name);
        modo = 3;
    } else {
        if (datos.getFactorAlgoritmo() == 2) {
            document.getElementById(constantsDIVS.GAME5_RED).style.display = constantsJSCSS.BLOCK;
            // player.tipoJuego = (new GameType().getGameType().JUEGO5.name);
            modo = 5;
        } else {
            document.getElementById(constantsInputs.GAME9_ONL).style.display = constantsJSCSS.BLOCK;
            //player.tipoJuego = (new GameType().getGameType().JUEGO9.name);
            modo = 9;
        }
    }
    localStorage.setItem(otherConstants.MODO, modo);
}
