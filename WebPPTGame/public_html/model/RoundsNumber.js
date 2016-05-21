/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, con ordinal (entero) y nombre identificador, correspondiente al número de rondas posibles en modo online (1, 3, 5, ANY o NONE).
 * ANY configura un número de rondas límite aleatorio.
 * NONE valor por defecto al hacer conexión el Websocket del lado cliente con el ServerEndpoint. 
 * @returns {RoundsNumber}
 */
RoundsNumber = function () {
    var roundsNumber = {
        UNA: {name: "UNA", ordinal: 0},
        TRES: {name: "TRES", ordinal: 1},
        CINCO: {name: "CINCO", ordinal: 2},
        ANY: {name: "ANY", ordinal: 3},
        NONE: {name: "NONE", ordinal: 4}
    };

    //GETTER
    this.getRoundsNumber = function () {
        return roundsNumber;
    };
};

