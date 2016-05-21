/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, con ordinal (entero) y nombre identificador, correspondiente a las fichas del juego de 3.
 * @returns {EnumFichas3}
 */
EnumFichas3=function(){
    var Fichas3={
        0:{name:"PAPEL", ordinal:0},
        1:{name:"PIEDRA", ordinal:1},
        2:{name:"TIJERA", ordinal:2}
    };
    
    //GETTER
    this.getFichas3=function(){
        return Fichas3;
    };
};

