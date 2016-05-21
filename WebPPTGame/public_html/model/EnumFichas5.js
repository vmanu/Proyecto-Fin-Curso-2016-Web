/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, con ordinal (entero) y nombre identificador, correspondiente a las fichas del juego de 5.
 * @returns {EnumFichas5}
 */
EnumFichas5 = function () {
    var Fichas5 = {
        0: {name: "PAPEL", ordinal: 0},
        1: {name: "SPOCK", ordinal: 1},
        2: {name: "PIEDRA", ordinal: 2},
        3: {name: "TIJERA", ordinal: 3},
        4: {name: "LAGARTO", ordinal: 4}
    };

    //GETTER
    this.getFichas5 = function () {
        return Fichas5;
    };
};
