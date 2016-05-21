/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Objeto que contendrá el resultado de cada ronda, así como la opción elegida por el usuario.
 * @returns {OpcionJuego}
 */
OpcionJuego=function(){
    var opcionJuego={
        result:new Result(),
        opcion:""
    };
    
    //GETTER
    this.getOpcionJuego=function(){
        return opcionJuego;
    };
    
};

