/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, con ordinal (entero) y nombre identificador, correspondiente a las fichas del juego de 9.
 * @returns {EnumFichas9}
 */
EnumFichas9=function(){
    var Fichas9={
        0: {name: "PAPEL", ordinal: 0},
        1: {name: "AIRE", ordinal: 1},
        2: {name: "AGUA", ordinal: 2},
        3: {name: "PISTOLA", ordinal: 3},
        4: {name: "PIEDRA", ordinal: 4},
        5: {name: "FUEGO", ordinal: 5},
        6: {name: "TIJERA", ordinal: 6},
        7: {name: "HUMANO", ordinal: 7},
        8: {name: "ESPONJA", ordinal: 8}
    };
    
    //GETTER
    this.getFichas9=function(){
        return Fichas9;
    };
};

