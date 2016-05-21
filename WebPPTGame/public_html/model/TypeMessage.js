/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, con ordinal (entero) y nombre identificador, correspondiente a los tipos de mensaje posibles en la
 * comunicación entre ClientEndpoint y ServerEndpoint.
 * CONEXION: mensaje de conexión con el websocket y, por tanto, con la partida.
 * PARTIDA: mensaje que identifica el envío o recepción de un objeto Partida.
 * RESPUESTA: referente a las opciones de juego elegidas por el usuario, que se enviarán al contrincante para la evaluación del ganador. 
 * DESCONEXION: mensaje de desconexión con el websocket y, por tanto, de la partida.
 * NOMBRE: evío al contrincante del nombre del otro usuario conectado.
 * @returns {ModalidadJuego}
 */
TypeMessage=function(){
    var TypeMessage={
        CONEXION: {name: "CONEXION", ordinal: 0},
        PARTIDA: {name: "PARTIDA", ordinal: 1},
        RESPUESTA: {name: "RESPUESTA", ordinal: 2},
        DESCONEXION: {name: "DESCONEXION", ordinal: 3},
        NOMBRE: {name: "NOMBRE", ordinal: 4}
    };
    
    //GETTER
    this.getTypeMessage=function(){
        return TypeMessage;
    };
};

