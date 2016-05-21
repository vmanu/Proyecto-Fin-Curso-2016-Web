/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, con ordinal (entero) y nombre identificador, correspondiente a las modalidades del juego (Online o 1 o 2 jugadores en local).
 * @returns {ModalidadJuego}
 */
ModalidadJuego = function () {
    var modalidad = {
        UNO: {name: "UNO", ordinal: 0},
        DOS: {name: "DOS", ordinal: 1},
        ONLINE: {name: "ONLINE", ordinal: 2}
    };

    //GETTER
    this.getModalidad = function () {
        return modalidad;
    };
};

