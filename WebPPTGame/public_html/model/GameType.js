/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, con ordinal (entero) y nombre identificador, correspondiente a los tipos de juego (3, 5, 9, ANY o NONE).
 * ANY configura una partida con variante de juego aleatoria.
 * NONE valor por defecto al hacer conexión el Websocket del lado cliente con el ServerEndpoint.
 * @returns {EnumFichas5}
 */
GameType = function () {
    var gameType = {
        JUEGO3: {name: "JUEGO3", ordinal: 0},
        JUEGO5: {name: "JUEGO5", ordinal: 1},
        JUEGO9: {name: "JUEGO9", ordinal: 2},
        ANY: {name: "ANY", ordinal: 3},
        NONE: {name: "NONE", ordinal: 4}
    };
    
    //GETTER
    this.getGameType = function () {
        return gameType;
    };
};

