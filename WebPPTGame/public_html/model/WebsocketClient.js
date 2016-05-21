/**
 * ClientEndpoint para la comunicación con ServerEndpoint en el modo online.
 * @type WebSocket
 */
var websocket;
var datos = localStorage.getItem("datos");
/**
 * Método de inicialización y conexión del websocket.
 */
function connect() {
    //ws://servidorpptgame.jelastic.cloudhosted.es/ServerPPTGame/ppt?user=
    if (websocket==null||(websocket!=null&&websocket.readyState != 1)) {
        var wsUri = "ws://localhost:8080/ServerPPTGame/ppt?user=" + datos.getNombreJ1();
        console.log("Connecting to " + wsUri);
        websocket = new WebSocket(wsUri);
        websocket.onopen = function (evt) {
            onOpen(evt);
        };
        websocket.onmessage = function (evt) {
            onMessage(evt);
        };
        websocket.onerror = function (evt) {
            onError(evt);
        };
        websocket.onclose = function (evt) {
            onClose(evt);
        };
    }
}

/**
 * Método ejecutado cuando se da la conexión con el websocket.
 */
function onOpen(evt) {
    console.log("onOpen");
    //writeToScreen("CONNECTED");
}

/**
 * Método ejecutado cuando se cierra la conexión con el websocket.
 */
function onClose(evt) {
    console.log("onClose");
    console.log(evt);
    //writeToScreen("DISCONNECTED");
}

/**
 * Método que se ejecuta en caso de recepción de información del ServerEndpoint. 
 * En él se ejecuta toda la lógica del juego y evaluación del ganador de la partida.
 * 
 * @param {type} evt Información recibida.
 */
function onMessage(evt) {
    var metamsg = new MetaMessage().getMetaMessage();
    console.log("evt: " + evt.data);
//    if (typeof evt.data == "string") {
    metamsg = JSON.parse(evt.data);
    console.debug("metamsg", metamsg.type);
    ////alert("COMPROBACION SOSPECHOSA: "+(metamsg.type == new TypeMessage().getTypeMessage().RESPUESTA.name));
    if (metamsg != null && metamsg.type == new TypeMessage().getTypeMessage().RESPUESTA.name) {
        var opcJuego = new OpcionJuego().getOpcionJuego();
        opcJuego = JSON.parse(JSON.stringify(metamsg.content));
        console.debug("opc jueego: ", opcJuego);
        if (opcJuego != null) {
            datos.setEnumChosen2(getEnumFromOrdinal(opcJuego.opcion));
            datos.setIdImgPulsada2(gestionaPulsadoMaquina() + localStorage.getItem("modo"));
            console.log("chosen1; " + datos.getEnumChosen1());
            if (datos.getEnumChosen1() != null) {
                $("#imgResultP2").attr("src", $("#" + datos.getIdImgPulsada2()).attr("src"));
                comunEvaluacionGanador();
            }
        }
    } else {
        if ((metamsg != null && metamsg.type == new TypeMessage().getTypeMessage().DESCONEXION.name)&&!datos.rondasFinalizadas()) {
            alert(language[userLang].failConnection);
            backFromPlayScreen();
            //websocket.onclose(evt);
            //websocket.close();
        } else {
            datos.setNombreJ2(JSON.parse(JSON.stringify(metamsg.content)));
        }

    }
//    }
}
/**
 * Método ejecutado en caso de error en la comunicación entre cliente y servidor.
 * @param {type} evt Información sobre el error.
 */
function onError(evt) {
    console.log("ERROR");
    console.log(evt);
    //writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

/**
 * Método utilizado para que el websocket espere cierto tiempo hasta ejecutar la conexión con el servidor.
 * @param {type} socket ClientEndpoint que se comunicará con el servidor. 
 * @param {type} callback Funcion de enviar mensaje desde cliente, definido en el ControllerGame
 */
function waitForSocketConnection(socket, callback) {
    setTimeout(function () {
        if (socket.readyState === 1) {
            console.log("Connection is made");
            if (callback != null) {
                callback();
            }
            return;
        } else {
            console.log("wait for connection...");
            waitForSocketConnection(socket, callback);
        }
    }, 5); // wait 5 milisecond for the connection...
}
