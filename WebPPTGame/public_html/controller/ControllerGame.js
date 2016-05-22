/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var datos, mapFichas, mapFichasMaquina, opc, modo, online, player, clave, complemento;

$(document).ready(function () {
    clave = "";
    complemento = "";
    datos = new DataContainer();
    datos.setRoundsCounter(0);
    datos.setVictoriesP1(0);
    datos.setVictoriesP2(0);
    mapFichas = datos.inicializaMapFichas();
    mapFichasMaquina = datos.inicializaMapFichasMaquina();
    localStorage.setItem("datos", datos);
    $("#p2").attr("src", "imagesPPTGame/blank.png");
});
/**
 * Método que quita la visibilidad de ciertos elementos del juego, poniendo visible el pasado por parámetro para su visualización en el navegador.
 * @param {type} divId Id del <div> que va a quedar a la vista del usuario.
 */
function cambiaVista(divId) {
    if (divId == "playLocal") {
        online = false;
    } else {
        online = true;
    }
    document.getElementById('initialButtons').style.display = 'none';
    //document.getElementById('playLocal').style.display = 'none';
    document.getElementById('playOnline').style.display = 'none';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('graphicRules').style.display = 'none';
    document.getElementById('infoDev').style.display = 'none';
    document.getElementById('localGameMenu').style.display = 'none';
    document.getElementById('onlineGameMenu').style.display = 'none';
    document.getElementById('customedOnline').style.display = 'none';
    document.getElementById('headerGame').style.display = 'none';
    document.getElementById('gameOf3red').style.display = 'none';
    document.getElementById('gameOf3blue').style.display = 'none';
    document.getElementById('gameOf5red').style.display = 'none';
    document.getElementById('gameOf5blue').style.display = 'none';
    document.getElementById('gameOf9red').style.display = 'none';
    document.getElementById('gameOf9blue').style.display = 'none';
    document.getElementById('vistaResult').style.display = 'none';
    document.getElementById('scores').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById(divId).style.display = 'block';
    $("#nameOfPlayer1").attr("placeholder", language[userLang].player1);
    $("#nameOfPlayer2").attr("placeholder", language[userLang].player2);
    $("#customedRounds").attr("placeholder", language[userLang].numberOfRounds);
    $("#nameOfPlayerOnline").attr("placeholder", language[userLang].yourNameHere);
}
/**
 * Método que hace aparecer un elemento, concretamente un <input> de tipo 'text', sobre una pantalla ya cargada y visible.
 * @param {type} element Elemento de entrada de texto que aparecerá en la pantalla.
 */
function visibleElement(element) {
    document.getElementById(element).style.display = 'inline';
}
/**
 * Método que hace desaparecer un elemento, concretamente un <input> de tipo 'text', sobre una pantalla ya cargada y visible.
 * @param {type} element Elemento de entrada de texto que deaparecerá de la pantalla.
 */
function invisibleElement(element) {
    document.getElementById(element).style.display = 'none';
}
/**
 * Método que gestiona el cambio de pantalla del formulario de configuración de la partida en modo local a la pantalla del juego.
 * Se encarga de recoger los datos introducidos por el usuario en dicho formulario y mostrar la pantalla correspondiente
 * en función de la configuración elegida.
 */
function cambiaVistaJuego() {
    if (($("#nameOfPlayer1").val() == "" || $("#nameOfPlayer1").val() == "undefined") || (dosJugadores == true && (($("#nameOfPlayer1").val() == "" || $("#nameOfPlayer1").val() == "undefined") || ($("#nameOfPlayer2").val() == "" || $("#nameOfPlayer2").val() == "undefined")))) {
        alert(language[userLang].fillTheFields);
    } else {
        var dosJugadores = false;
        if (document.getElementById('onePlayer').checked) {
            datos.setModalidadJuego(new ModalidadJuego().getModalidad().UNO);
            localStorage.setItem("rbPlayers", "onePlayer");
            localStorage.setItem("namePlayer1", $("#nameOfPlayer1").val());
        } else {
            localStorage.setItem("rbPlayers", "twoPlayers");
            datos.setModalidadJuego(new ModalidadJuego().getModalidad().DOS);
            dosJugadores = true;
            localStorage.setItem("namePlayer2", $("#nameOfPlayer2").val());
        }
        cambiaVista('headerGame');
        datos.setNombreJ1($("#nameOfPlayer1").val());
        if (document.getElementById('game3').checked == true) {
            localStorage.setItem("rbJuego", "game3");
            document.getElementById('gameOf3red').style.display = 'block';
            datos.setFactorAlgoritmo(1);
            modo = 3;
        } else {
            if (document.getElementById('game5').checked == true) {
                localStorage.setItem("rbJuego", "game5");
                document.getElementById('gameOf5red').style.display = 'block';
                datos.setFactorAlgoritmo(2);
                modo = 5;
            } else {
                localStorage.setItem("rbJuego", "game9");
                document.getElementById('gameOf9red').style.display = 'block';
                datos.setFactorAlgoritmo(4);
                modo = 9;
            }
        }
        setLimiteRondas();
        datos.setTurno(true);
        $("#p1").attr("src", "imagesPPTGame/helpsymbolrojo.png");
        showToastRed();
    }
}
/**
 * Método encargado de cambiar al DataContainer datos el número de rondas elegido en el formulario del modo local.
 */
function setLimiteRondas() {
    if (document.getElementById('oneRound').checked) {
        datos.setRoundsLimit(1);
        localStorage.setItem("rbRondas", "oneRound");
    } else {
        if (document.getElementById('threeRounds').checked) {
            datos.setRoundsLimit(3);
            localStorage.setItem("rbRondas", "threeRounds");
        } else {
            if (document.getElementById('fiveRounds').checked) {
                datos.setRoundsLimit(5);
                localStorage.setItem("rbRondas", "fiveRounds");
            } else {
                datos.setRoundsLimit($("#customedRounds").val());
                localStorage.setItem("rbRondas", "moreRounds");
                localStorage.setItem("valueRondas", $("#customedRounds").val());
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
    if (document.getElementById(window).style.display == "block") {
        opc = mapFichas[opClicked];
        //alert(datos.isTurno()+" - - - "+opc);
        if (datos.isTurno() == true && opc != null) {
            //alert("IS TURNO"+datos.isTurno());
            datos.setEnumChosen1(opc);
            datos.setIdImgPulsada1(imgId);
            if (datos.getModalidadJuego().ordinal == modalidad.DOS.ordinal) {
                //DOS JUGADORES
                //alert("DOS JUGADORES");
                datos.setNombreJ2($("#nameOfPlayer2").val());
                turnoAzul();
                datos.setTurno(false);
                showToastBlue();
            } else {
                if (datos.getModalidadJuego().ordinal == modalidad.UNO.ordinal) {
                    //UN JUGADOR
                    //alert("UN JUGADOR");
                    datos.setEnumChosen2(getEnumFromOrdinal(Math.floor((Math.random() * ((datos.getFactorAlgoritmo() * 2) + 1)))));
                    //console.log(datos.getEnumChosen2());
                    datos.setNombreJ2("CPU");
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
                        //$("#imgResultP2").attr("src", document.getElementById(datos.getIdImgPulsada2()).src);
                        $("#imgResultP2").attr("src", $("#" + datos.getIdImgPulsada2()).attr("src"));
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
//    $("#imgResultP1").attr("src", document.getElementById(datos.getIdImgPulsada1()).src);
//    $("#imgResultP2").attr("src", document.getElementById(datos.getIdImgPulsada2()).src);
    //alert("id 1: " + datos.getIdImgPulsada1() + " --- id 2: " + datos.getIdImgPulsada2());
    //alert("ruta 1: "+$("#"+datos.getIdImgPulsada1()).attr("src")+" --- ruta 2: "+$("#"+datos.getIdImgPulsada2()).attr("src"));
    $("#imgResultP1").attr("src", $("#" + datos.getIdImgPulsada1()).attr("src"));
    if (datos.getModalidadJuego().ordinal == modalidad.DOS.ordinal) {
        $("#imgResultP2").attr("src", $("#" + datos.getIdImgPulsada2()).attr("src"));
    } else {
        $("#imgResultP2").attr("src", $("#" + datos.getIdImgPulsada2() + modo).attr("src"));
    }
    switch (logicaJuego()) {
        case 0:
            //empata
            console.log("case empate");
            $("#resultGame").text(language[userLang].draw);
            break;
        case 1:
            //gana jugador 1
            console.log("case gana");
            $("#resultGame").text(datos.getNombreJ1() + language[userLang].wins);
            datos.sumaVictoriesP1();
            break;
        case 2:
            //gana jugador 2
            console.log("case pierde");
            $("#resultGame").text(datos.getNombreJ2() + language[userLang].wins);
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
        datos.avanzaRonda();
        //alert(datos.getRoundsCounter());
        if (datos.rondasFinalizadas() == true) {
            $("#next").prop("disabled", true);
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
    cambiaVista('vistaResult');
    $("#wonCountP1").html(datos.getNombreJ1() + language[userLang].wonCount + datos.getVictoriesP1());
    $("#wonCountP2").html(datos.getNombreJ2() + language[userLang].wonCount + datos.getVictoriesP2());
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
    $("#p1").attr("src", "imagesPPTGame/blank.png");
    $("#p2").attr("src", "imagesPPTGame/helpsymbolazul.png");
    if (document.getElementById('game3').checked == true) {
        document.getElementById('gameOf3blue').style.display = 'block';
    } else {
        if (document.getElementById('game5').checked == true) {
            document.getElementById('gameOf5blue').style.display = 'block';
        } else {
            document.getElementById('gameOf9blue').style.display = 'block';
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
    $("#next").prop("disabled", false);
    datos.setRoundsCounter(0);
    if (datos.getModalidadJuego().ordinal == new ModalidadJuego().getModalidad().ONLINE.ordinal && websocket != null) {
        websocket.close();
    }
    cambiaVista('initialButtons');
    //document.getElementById('title').style.display = 'block';
}
/**
 * Método encargado de sacar una notificación emergente informando del turno del jugador 1 (color rojo).
 */
function showToastRed() {
    if (userLang != "es") {
        $('.toast').text(datos.getNombreJ1() + language[userLang].turnOf).css("background-color", "red").fadeIn(500).delay(1200).fadeOut(550);
    } else {
        $('.toast').text(language[userLang].turnOf + datos.getNombreJ1()).css("background-color", "red").fadeIn(500).delay(1200).fadeOut(550);
    }
}
/**
 * Método encargado de sacar una notificación emergente informando del turno del jugador 2 (color azul).
 */
function showToastBlue() {
    if (userLang != "es") {
        $('.toast').text(datos.getNombreJ1() + language[userLang].turnOf).css("background-color", "blue").fadeIn(500).delay(1200).fadeOut(550);
    } else {
        $('.toast').text(language[userLang].turnOf + datos.getNombreJ1()).css("background-color", "blue").fadeIn(500).delay(1200).fadeOut(550);
    }
}
/**
 * Método que gestiona el cambio de pantalla del formulario de configuración de la partida en modo online a la pantalla del juego.
 * Se encarga de recoger los datos introducidos por el usuario en dicho formulario y mostrar la pantalla correspondiente
 * en función de la configuración elegida.
 */
function cambiaVistaJuegoOnline() {
    if ($("#nameOfPlayerOnl").val() == "" || $("#nameOfPlayerOnl").val() == "undefined") {
        alert(language[userLang].fillTheFields);
    } else {
        //if (id == "gameOnlineScreen") {
        datos.setTurno(true);
        online = true;
        localStorage.setItem("online", online);
        datos.setModalidadJuego(new ModalidadJuego().getModalidad().ONLINE);
        cambiaVista('headerGame');
        datos.setNombreJ1($("#nameOfPlayerOnl").val());
        localStorage.setItem("namePlayerOnl", $("#nameOfPlayerOnl").val());
        connect();
        var metamsg = new MetaMessage().getMetaMessage();
        metamsg.type = (new TypeMessage().getTypeMessage().CONEXION.name);
        player = new Player().getPlayer();
        player.namePlayer = (datos.getNombreJ1());
        player.playing = (false);
        //alert("PLAYER JSON "+playerJson);
        datos.setJugando(true);
        if (document.getElementById('game3Onl').checked == true) {
            localStorage.setItem("rbJuegoOnl", "game3Onl");
            document.getElementById('gameOf3red').style.display = 'block';
            datos.setFactorAlgoritmo(1);
            player.tipoJuego = (new GameType().getGameType().JUEGO3.name);
            modo = 3;
        } else {
            if (document.getElementById('game5Onl').checked == true) {
                localStorage.setItem("rbJuegoOnl", "game5Onl");
                document.getElementById('gameOf5red').style.display = 'block';
                datos.setFactorAlgoritmo(2);
                player.tipoJuego = (new GameType().getGameType().JUEGO5.name);
                modo = 5;
            } else {
                localStorage.setItem("rbJuegoOnl", "game9Onl");
                document.getElementById('gameOf9red').style.display = 'block';
                datos.setFactorAlgoritmo(4);
                player.tipoJuego = (new GameType().getGameType().JUEGO9.name);
                modo = 9;
            }
        }
        localStorage.setItem("modo", modo);
        setLimiteRondasOnline();
        metamsg.content = (player);
        console.log(metamsg);
        var msgToSend = JSON.stringify(metamsg);
        //alert(msgToSend);
        waitForSocketConnection(websocket, function () {
            websocket.send(msgToSend);
        });

    }


    //}
}
/**
 * Método encargado de cambiar al DataContainer datos el número de rondas elegido en el formulario del modo online.
 */
function setLimiteRondasOnline() {
    if (document.getElementById('oneRoundOnl').checked) {
        datos.setRoundsLimit(1);
        player.numberOfRounds = (new RoundsNumber().getRoundsNumber().UNA.name);
        localStorage.setItem("rbRondasOnl", "oneRoundOnl");
    } else {
        if (document.getElementById('threeRoundsOnl').checked) {
            datos.setRoundsLimit(3);
            player.numberOfRounds = (new RoundsNumber().getRoundsNumber().TRES.name);
            localStorage.setItem("rbRondasOnl", "threeRoundsOnl");
        } else {
            datos.setRoundsLimit(5);
            player.numberOfRounds = (new RoundsNumber().getRoundsNumber().CINCO.name);
            localStorage.setItem("rbRondasOnl", "fiveRoundsOnl");
        }
    }
    //alert(player.numberOfRounds.name);
}
/**
 * Método encargado de la configuración de una partida aleatoria, con patrones de juego cualesquiera, sin que el usuario los elija.
 */
function randomGame() {
    var metamsg = new MetaMessage();
    var p = new Player();
    p.setPlaying(false);
    p.setRoundsNumber(new RoundsNumber().getRoundsNumber().ANY);
    p.setGameType(new GameType().getGameType().ANY);
    p.setNumPartidas(datos.getNombreJ1());
    metamsg.setContent(p);
    metamsg.setTypeMessage(new TypeMessage().getTypeMessage().CONEXION);
    websocket.send(metamsg);
}

function getScores(selectedOption) {
    alert(selectedOption);
    var players = null;
    if (selectedOption == "byRounds") {
        $.post("http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByRounds",
                function (data) {
                    alert(data);
                    players = data;
                });
    } else {
        if (selectedOption == "byVictories") {
            $.post("http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByVictories",
                    function (data) {
                        players = data;
                    });
        } else {
            $.post("http://192.168.1.104:8080/ServerPPTGame/ServletDB?op=getByAverage",
                    function (data) {
                        players = data;
                    });
        }
    }
}

function getKeys() {
    if (clave == "") {
        var keyCompl = new ClaveComplemento().getClaveComplemento();
        $.post("http://192.168.1.104:8080/ServerPPTGame/seguridad",
                function (data) {
                    console.debug("DATA", data);
                    keyCompl = JSON.parse(data);
                    console.debug("keyCompl", keyCompl);
                    clave = keyCompl.claves[Math.floor((Math.random() * ((keyCompl.claves.length))))];
                    console.debug("claves", clave);
                    complemento = keyCompl.complementos[Math.floor((Math.random() * ((keyCompl.complementos.length))))];
                    console.debug("complementos", complemento);
                    console.debug("keysComplements getKEYS",sessionStorage.getItem("keysComplements"));
                });
                
        //alert(clave+"-"+complemento);
    }
}

function strhash(str) {
    if (str.length % 32 > 0)
        str += Array(33 - str.length % 32).join("z");
    var hash = '', bytes = [], i = j = k = a = 0, dict = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        bytes[j++] = (ch < 127) ? ch & 0xFF : 127;
    }
    var chunk_len = Math.ceil(bytes.length / 32);
    for (i = 0; i < bytes.length; i++) {
        j += bytes[i];
        k++;
        if ((k == chunk_len) || (i == bytes.length - 1)) {
            a = Math.floor(j / k);
            if (a < 32)
                hash += '0';
            else if (a > 126)
                hash += 'z';
            else
                hash += dict[  Math.floor((a - 32) / 2.76) ];
            j = k = 0;
        }
    }
    return hash;
}

function doLogin() {
    console.debug("compl", complemento);
    console.debug("login", $("#login").val());
    console.debug("pass", $("#password").val());
    console.debug("click", click);
    console.debug("confirmPass", $("#confirmPass").val());
    if ($("#login").val() != "" && $("#password").val() != "" && (click == false || (click == true && $("#password").val() == $("#confirmPass").val()))) {
        var user = new User().getUser();
        user.login = $("#login").val();
        user.pass = $("#password").val();
        AES_Init();
        var key = clave + "" + complemento;
        console.debug("keyCompl", key);
        var b64User = btoa(AES_Encrypt(JSON.stringify(user), key));
        var keyHash = strhash(clave);
        console.debug("keyHash",keyHash);
        var complHash = strhash(complemento);
        console.debug("complHash",complHash);
        var logueadoCorrectamente;
        if (click == true) {
            $.post("http://192.168.1.104/:8080/ServerPPTGame/ServletDB?op=put",
                    {
                        user: b64User,
                        claveHasheada: keyHash,
                        complementoHasheado: complHash
                    },
                    function (data) {
                        logueadoCorrectamente = data;
                        
                    });
        } else {
            $.post("http://192.168.1.104:8080/ServerPPTGame/login",
                    {
                        user: b64User,
                        claveHasheada: keyHash,
                        complementoHasheado: complHash
                    },
                    function (data) {
                        console.debug("keysComplements LOGIN",sessionStorage.getItem("keysComplements"));
                        console.debug("keySession LOGIN",sessionStorage.getItem("keySession"));
                        logueadoCorrectamente = data;
                    });
        }
        if (logueadoCorrectamente == "true") {
            clave = "";
            complemento = "";
        } else {
            alert("Login y/o password incorrectos!");
        }
    } else {
        alert(language[userLang].fillTheFields);
    }
}