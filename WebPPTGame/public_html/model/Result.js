/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto con estructura de Enum, con ordinal (entero) y nombre identificador, correspondiente al resultado de cada ronda (Empate, gana jugador 1 o gana jugador 2).
 * @returns {Result}
 */
Result=function(){
    var Result={
        GANA:{name:"GANA",ordinal:0}, 
        PIERDE:{name:"PIERDE",ordinal:1}, 
        EMPATA:{name:"EMPATA",ordinal:2}
    };
    
    //GETTER
    this.getResult=function(){
        return Result;
    };
};

